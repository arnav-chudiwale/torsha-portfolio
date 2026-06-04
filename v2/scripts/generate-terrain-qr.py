"""
Generate Terrain-branded QR codes for https://torsha-portfolio.vercel.app/
Palette: field-paper, watershed-teal, slate-depth, chalk (Terrain design system).
"""

from __future__ import annotations

import math
from pathlib import Path

import qrcode
from PIL import Image, ImageDraw, ImageFont
from qrcode.constants import ERROR_CORRECT_H
from qrcode.image.styledpil import StyledPilImage
from qrcode.image.styles.colormasks import SolidFillColorMask
from qrcode.image.styles.moduledrawers import RoundedModuleDrawer

URL = "https://torsha-portfolio.vercel.app/"
ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "public" / "qr"

FIELD_PAPER = "#f7f4ee"
WATERSHED_TEAL = "#2d6a6a"
SLATE_DEPTH = "#1b2a3b"
CHALK = "#d5cfc3"
ALLUVIAL_WARM = "#c4956a"
CANVAS = 1400
PAD = 96
QR_SIZE = 720


def hex_rgb(value: str) -> tuple[int, int, int]:
    value = value.lstrip("#")
    return tuple(int(value[i : i + 2], 16) for i in (0, 2, 4))


def make_qr_matrix() -> Image.Image:
    qr = qrcode.QRCode(
        version=None,
        error_correction=ERROR_CORRECT_H,
        box_size=12,
        border=2,
    )
    qr.add_data(URL)
    qr.make(fit=True)
    img = qr.make_image(
        image_factory=StyledPilImage,
        module_drawer=RoundedModuleDrawer(),
        color_mask=SolidFillColorMask(
            back_color=hex_rgb(FIELD_PAPER),
            front_color=hex_rgb(WATERSHED_TEAL),
        ),
    )
    return img.convert("RGBA")


def draw_contour_wave(
    draw: ImageDraw.ImageDraw,
    y: int,
    width: int,
    amplitude: int,
    color: str,
    stroke: int = 2,
) -> None:
    points = []
    steps = 48
    for i in range(steps + 1):
        x = int((i / steps) * width)
        t = i / steps * math.pi * 2
        yy = y + int(math.sin(t * 1.4) * amplitude) + int(math.sin(t * 0.6 + 1) * (amplitude * 0.35))
        points.append((x, yy))
    draw.line(points, fill=color, width=stroke, joint="curve")


def load_font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    candidates = []
    if bold:
        candidates = [
            "C:/Windows/Fonts/georgiab.ttf",
            "C:/Windows/Fonts/timesbd.ttf",
            "C:/Windows/Fonts/arialbd.ttf",
        ]
    else:
        candidates = [
            "C:/Windows/Fonts/segoeui.ttf",
            "C:/Windows/Fonts/arial.ttf",
            "C:/Windows/Fonts/calibri.ttf",
        ]
    for path in candidates:
        try:
            return ImageFont.truetype(path, size)
        except OSError:
            continue
    return ImageFont.load_default()


def center_text(draw: ImageDraw.ImageDraw, text: str, y: int, font, fill: str, canvas_w: int) -> None:
    bbox = draw.textbbox((0, 0), text, font=font)
    tw = bbox[2] - bbox[0]
    draw.text(((canvas_w - tw) // 2, y), text, font=font, fill=fill)


def build_card(qr_img: Image.Image, variant: str = "light") -> Image.Image:
    bg = FIELD_PAPER if variant == "light" else "#0f1419"
    teal = WATERSHED_TEAL if variant == "light" else "#5ba3a3"
    text_primary = SLATE_DEPTH if variant == "light" else "#e4dfd5"
    text_muted = "#6b6560" if variant == "light" else "#8a847a"
    border = CHALK if variant == "light" else "#2a3540"

    canvas = Image.new("RGBA", (CANVAS, CANVAS), bg)
    draw = ImageDraw.Draw(canvas)

    # Outer frame — field instrument panel
    inset = 48
    draw.rounded_rectangle(
        (inset, inset, CANVAS - inset, CANVAS - inset),
        radius=28,
        outline=border,
        width=2,
        fill=None,
    )
    draw.rounded_rectangle(
        (inset + 10, inset + 10, CANVAS - inset - 10, CANVAS - inset - 10),
        radius=22,
        outline=teal,
        width=1,
        fill=None,
    )

    # Contour accents (top + bottom)
    draw_contour_wave(draw, 118, CANVAS - 160, 6, teal, 2)
    draw_contour_wave(draw, CANVAS - 118, CANVAS - 160, 5, ALLUVIAL_WARM, 2)

    # Header
    font_brand = load_font(52, bold=True)
    font_sub = load_font(22)
    font_url = load_font(18)
    font_caption = load_font(16)

    center_text(draw, "TG", 88, load_font(36, bold=True), teal, CANVAS)
    center_text(draw, "Terrain", 168, font_brand, text_primary, CANVAS)
    center_text(draw, "Torsha Goswami", 228, font_sub, text_muted, CANVAS)
    center_text(draw, "Environmental Science & Watershed Ecology", 262, font_caption, text_muted, CANVAS)

    # QR block with paper inset
    qr_box = qr_img.resize((QR_SIZE, QR_SIZE), Image.Resampling.LANCZOS)
    qx = (CANVAS - QR_SIZE) // 2
    qy = 310
    shadow = Image.new("RGBA", (QR_SIZE + 24, QR_SIZE + 24), (0, 0, 0, 0))
    sh_draw = ImageDraw.Draw(shadow)
    sh_draw.rounded_rectangle((12, 12, QR_SIZE + 12, QR_SIZE + 12), radius=16, fill=(27, 42, 59, 28))
    canvas.alpha_composite(shadow, (qx - 12, qy - 4))

    paper = Image.new("RGBA", (QR_SIZE + 32, QR_SIZE + 32), (0, 0, 0, 0))
    pdraw = ImageDraw.Draw(paper)
    pdraw.rounded_rectangle((0, 0, QR_SIZE + 31, QR_SIZE + 31), radius=18, fill=FIELD_PAPER if variant == "light" else "#1a2028", outline=border, width=2)
    canvas.alpha_composite(paper, (qx - 16, qy - 16))
    canvas.alpha_composite(qr_box, (qx, qy))

    # Center monogram on QR (high error correction)
    badge = Image.new("RGBA", (112, 112), (0, 0, 0, 0))
    bdraw = ImageDraw.Draw(badge)
    bdraw.ellipse((4, 4, 108, 108), fill=FIELD_PAPER if variant == "light" else "#1a2028", outline=teal, width=2)
    bfont = load_font(40, bold=True)
    bbox = bdraw.textbbox((0, 0), "TG", font=bfont)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    bdraw.text(((112 - tw) // 2 - bbox[0], (112 - th) // 2 - bbox[1]), "TG", font=bfont, fill=teal)
    canvas.alpha_composite(badge, (qx + (QR_SIZE - 112) // 2, qy + (QR_SIZE - 112) // 2))

    # Footer
    center_text(draw, "Scan to explore the portfolio", 1060, font_sub, text_primary, CANVAS)
    center_text(draw, "torsha-portfolio.vercel.app", 1100, font_url, teal, CANVAS)
    center_text(draw, "How water shapes landscapes · How landscapes shape water", 1140, font_caption, text_muted, CANVAS)

    return canvas.convert("RGB")


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    qr = make_qr_matrix()

    # Standalone QR (transparent-friendly PNG)
    qr.save(OUT_DIR / "terrain-qr-standalone.png", "PNG")

    light = build_card(qr, "light")
    dark = build_card(qr, "dark")
    light.save(OUT_DIR / "terrain-qr-card-light.png", "PNG", dpi=(300, 300))
    dark.save(OUT_DIR / "terrain-qr-card-dark.png", "PNG", dpi=(300, 300))

    # Square social / share size
    share = light.resize((1080, 1080), Image.Resampling.LANCZOS)
    share.save(OUT_DIR / "terrain-qr-share.png", "PNG")

    print(f"Generated QR assets in {OUT_DIR}")
    for p in sorted(OUT_DIR.glob("*.png")):
        print(f"  - {p.name}")


if __name__ == "__main__":
    main()
