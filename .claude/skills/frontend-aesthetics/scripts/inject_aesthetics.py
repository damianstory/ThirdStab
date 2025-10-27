#!/usr/bin/env python3
"""
Aesthetic Injection Tool
Automatically enhances frontend prompts with sophisticated aesthetic instructions
"""

import sys
import random

# Core aesthetic enhancement that works with any prompt
UNIVERSAL_AESTHETIC = """
AESTHETIC REQUIREMENTS:
Push visual creativity while maintaining usability. Make bold, distinctive design choices:
- Typography: Choose unexpected font combinations. Mix serif + mono, or display + geometric sans. NEVER use Inter, Roboto, Open Sans, or Lato.
- Colors: Go beyond safe choices. Use vibrant gradients, bold contrasts, or sophisticated monochromes.
- Spacing: Use dramatic scale differences (3x+ jumps, not 1.5x)
- Details: Add polish through transitions, hover states, and micro-animations
- Layout: Break from center-aligned patterns. Use asymmetry, overlapping elements, and creative whitespace.
Create something visually memorable, not generic.
"""

# Style-specific injections
STYLES = {
    "neo-brutalism": """
Style with neo-brutalist aesthetics: thick black borders (4px), harsh shadows offset by 8px,
clashing bright colors (#ff90e8, #ffc900, #23f0c7), slight rotations on elements (-0.5deg to 1deg),
and heavy sans-serif typography (Space Grotesk, Archivo Black). Make it loud and unapologetic.""",

    "glassmorphism": """
Apply glassmorphism: translucent panels (rgba(255,255,255,0.15)) with backdrop-filter blur(12px),
subtle white borders with opacity, soft shadows, and gradient mesh backgrounds.
Create an ethereal, floating feeling with depth layers.""",

    "editorial": """
Design with editorial/magazine aesthetics: massive serif headlines (Playfair Display, 64px+),
sophisticated column layouts, drop caps, pull quotes, generous white space (15vh padding),
and high typographic contrast (100 vs 900 weights). Think Vogue meets The New Yorker.""",

    "retro-futurism": """
Apply retro-futuristic aesthetics: neon gradients (#ff0080 to #40e0d0),
glowing text effects (text-shadow with 30px blur), grid overlays, dark backgrounds (#0a0e27),
chrome text effects, and animated scan lines. Channel Tron meets Miami Vice.""",

    "minimal-luxury": """
Design with minimal luxury: extreme whitespace (15vh vertical padding), thin serif typography (Bodoni Moda 300),
monochrome palette, hairline borders (1px), subtle fade-ins on scroll,
and refined micro-interactions. Think high-end fashion brand.""",

    "organic": """
Apply organic design: irregular curved shapes using border-radius (30% 70% variations),
earth tone palette (#8B4513, #87A96B, #F5E6D3), hand-drawn SVG elements,
gentle morphing animations (8s ease-in-out), and natural textures. Create a handcrafted feeling.""",

    "dark-excellence": """
Design for dark mode: true black backgrounds (#0a0a0a), neon accent colors (#00ff88),
subtle gradients in grays, glowing elements on hover, high contrast text (#f0f0f0),
and sophisticated shadow layers. Make darkness feel premium, not depressing."""
}

# Component-specific enhancements
COMPONENT_AESTHETICS = {
    "landing": "Hero with asymmetric layout, overlapping elements, and bold typography. Sections with varied rhythms and unexpected alignments.",
    "dashboard": "Data visualizations with vibrant colors, clear hierarchies through size/color, and smooth transitions between states.",
    "form": "Thoughtful focus states with color transitions, helpful micro-animations on validation, and progressive disclosure.",
    "card": "Distinctive shadows on hover, subtle gradient backgrounds, and animated entrance effects.",
    "navigation": "Clear active states, smooth underline animations, and distinctive but intuitive design.",
    "table": "Zebra striping with subtle colors, hover row highlights, and smooth sort animations.",
    "modal": "Backdrop blur effects, smooth scale entrance, and elegant close transitions.",
    "button": "Transform on hover (translateY + scale), multiple shadow layers, and satisfying click feedback."
}

# Font combinations
FONT_PAIRS = [
    ("'Fraunces', serif", "'Work Sans', sans-serif"),
    ("'JetBrains Mono', monospace", "'Space Grotesk', sans-serif"),
    ("'Clash Display', sans-serif", "'Satoshi', sans-serif"),
    ("'Playfair Display', serif", "'Source Sans 3', sans-serif"),
    ("'Bricolage Grotesque', sans-serif", "'DM Sans', sans-serif"),
    ("'Crimson Pro', serif", "'Instrument Sans', sans-serif"),
    ("'Bebas Neue', sans-serif", "'Inter Tight', sans-serif"),
]

def inject_aesthetics(prompt, style=None, component=None, randomize=False):
    """
    Enhance a frontend prompt with aesthetic instructions

    Args:
        prompt: Original user prompt
        style: Specific style to apply (optional)
        component: Component type for specific enhancements (optional)
        randomize: Pick random style if True
    """
    enhanced_prompt = prompt + "\n\n"

    # Add universal aesthetic requirements
    enhanced_prompt += UNIVERSAL_AESTHETIC + "\n"

    # Add style-specific requirements
    if randomize and not style:
        style = random.choice(list(STYLES.keys()))
        print(f"→ Applying random style: {style}")

    if style and style in STYLES:
        enhanced_prompt += f"\nSTYLE DIRECTION:\n{STYLES[style]}\n"

    # Add component-specific guidance
    if component and component in COMPONENT_AESTHETICS:
        enhanced_prompt += f"\nCOMPONENT FOCUS:\n{COMPONENT_AESTHETICS[component]}\n"

    # Suggest a font pairing
    header_font, body_font = random.choice(FONT_PAIRS)
    enhanced_prompt += f"\nTYPOGRAPHY SUGGESTION:\nHeaders: {header_font}\nBody: {body_font}\n"

    return enhanced_prompt

def main():
    """CLI interface for the aesthetic injector"""

    if len(sys.argv) < 2:
        print("Usage: inject_aesthetics.py <prompt> [--style=<style>] [--component=<type>] [--random]")
        print("\nAvailable styles:", ", ".join(STYLES.keys()))
        print("Available components:", ", ".join(COMPONENT_AESTHETICS.keys()))
        sys.exit(1)

    prompt = sys.argv[1]
    style = None
    component = None
    randomize = False

    # Parse arguments
    for arg in sys.argv[2:]:
        if arg.startswith("--style="):
            style = arg.split("=")[1]
        elif arg.startswith("--component="):
            component = arg.split("=")[1]
        elif arg == "--random":
            randomize = True

    # Generate enhanced prompt
    enhanced = inject_aesthetics(prompt, style, component, randomize)

    print("\n" + "="*50)
    print("AESTHETICALLY ENHANCED PROMPT:")
    print("="*50)
    print(enhanced)
    print("="*50)

if __name__ == "__main__":
    main()
