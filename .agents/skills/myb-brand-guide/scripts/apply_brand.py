#!/usr/bin/env python3
"""
myBlueprint Brand Application Tool
Applies official brand guidelines to frontend code
"""

import sys
import re

# Brand color definitions
BRAND_COLORS = {
    "primary-blue": "#0092FF",
    "navy": "#22224C",
    "light-blue": "#C6E7FF",
    "off-white": "#F6F6FF",
    "neutral-1": "#E5E9F1",
    "neutral-2": "#D9DFEA",
    "neutral-3": "#AAB7CB",
    "neutral-4": "#65738B",
    "neutral-5": "#485163",
    "neutral-6": "#252A33"
}

# Typography scale
TYPOGRAPHY = {
    "h1": "font-size: 64px; line-height: 80px; font-weight: 900;",
    "h2": "font-size: 40px; line-height: 56px; font-weight: 900;",
    "h3": "font-size: 32px; line-height: 48px; font-weight: 900;",
    "h4": "font-size: 24px; line-height: 36px; font-weight: 900;",
    "subheader": "font-size: 22px; line-height: 32px; font-weight: 500;",
    "body-1": "font-size: 20px; line-height: 32px;",
    "body-2": "font-size: 16px; line-height: 28px;",
    "compact": "font-size: 14px; line-height: 20px;",
    "subtitle-1": "font-size: 12px; line-height: 20px; font-weight: 500;",
    "subtitle-2": "font-size: 10px; line-height: 16px; font-weight: 700;"
}

def generate_css_variables():
    """Generate CSS custom properties for brand colors"""
    css = ":root {\n  /* myBlueprint Brand Colors */\n"

    # Add color variables
    for name, value in BRAND_COLORS.items():
        css_var_name = f"--myb-{name}"
        css += f"  {css_var_name}: {value};\n"

    # Add font stacks
    css += "\n  /* Typography */\n"
    css += "  --myb-font-primary: 'Museo Sans', -apple-system, BlinkMacSystemFont, sans-serif;\n"
    css += "  --myb-font-secondary: 'Open Sans', -apple-system, BlinkMacSystemFont, sans-serif;\n"

    css += "}\n"
    return css

def generate_tailwind_config():
    """Generate Tailwind configuration object"""
    config = """// myBlueprint Tailwind Config
module.exports = {
  theme: {
    extend: {
      colors: {
        'myb': {
"""

    for name, value in BRAND_COLORS.items():
        clean_name = name.replace("-", "_")
        config += f"          '{name}': '{value}',\n"

    config += """        }
      },
      fontFamily: {
        'museo': ['Museo Sans', 'system-ui', 'sans-serif'],
        'open': ['Open Sans', 'system-ui', 'sans-serif'],
      }
    }
  }
}"""
    return config

def apply_brand_to_html(html_content):
    """Apply brand styles to HTML content"""

    # Replace generic colors with brand colors
    replacements = [
        # Blues
        (r'#0000FF|#0066CC|rgb\(0,\s*0,\s*255\)', BRAND_COLORS['primary-blue']),
        (r'blue|primary', 'var(--myb-primary-blue)'),

        # Grays
        (r'#333333|#333|rgb\(51,\s*51,\s*51\)', BRAND_COLORS['navy']),
        (r'#666666|#666|rgb\(102,\s*102,\s*102\)', BRAND_COLORS['neutral-4']),
        (r'#999999|#999|rgb\(153,\s*153,\s*153\)', BRAND_COLORS['neutral-3']),
        (r'#CCCCCC|#CCC|rgb\(204,\s*204,\s*204\)', BRAND_COLORS['neutral-2']),

        # Backgrounds
        (r'background:\s*white', f'background: {BRAND_COLORS["off-white"]}'),
        (r'bg-white', 'bg-[#F6F6FF]'),

        # Fonts
        (r"font-family:\s*['\"]?(Inter|Roboto|Open Sans|Lato)['\"]?", "font-family: 'Museo Sans', 'Open Sans'"),
    ]

    modified = html_content
    for pattern, replacement in replacements:
        modified = re.sub(pattern, replacement, modified, flags=re.IGNORECASE)

    return modified

def create_brand_snippet():
    """Create a code snippet for quick brand application"""
    snippet = """<!-- myBlueprint Brand Quick Start -->
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;700;900&display=swap" rel="stylesheet">

<style>
""" + generate_css_variables() + """

  /* Base styles */
  body {
    font-family: var(--myb-font-secondary);
    color: var(--myb-navy);
    background: var(--myb-off-white);
  }

  h1, h2, h3, h4 {
    font-family: var(--myb-font-primary);
    color: var(--myb-navy);
    font-weight: 900;
  }

  a {
    color: var(--myb-primary-blue);
    transition: opacity 0.2s ease;
  }

  a:hover {
    opacity: 0.8;
  }

  .btn-primary {
    background: var(--myb-primary-blue);
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 700;
    transition: all 0.2s ease;
    border: none;
    cursor: pointer;
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 146, 255, 0.3);
  }
</style>"""

    return snippet

def main():
    """CLI interface for brand application"""
    if len(sys.argv) < 2:
        print("myBlueprint Brand Tool")
        print("\nUsage:")
        print("  apply_brand.py css        - Generate CSS variables")
        print("  apply_brand.py tailwind   - Generate Tailwind config")
        print("  apply_brand.py snippet    - Generate quick-start snippet")
        print("  apply_brand.py check <file> - Check file for brand compliance")
        sys.exit(1)

    command = sys.argv[1]

    if command == "css":
        print(generate_css_variables())
    elif command == "tailwind":
        print(generate_tailwind_config())
    elif command == "snippet":
        print(create_brand_snippet())
    elif command == "check" and len(sys.argv) > 2:
        filename = sys.argv[2]
        try:
            with open(filename, 'r') as f:
                content = f.read()

            # Check for brand compliance
            issues = []

            # Check for wrong fonts
            if re.search(r'Inter|Roboto(?!to)|Lato|Montserrat|Poppins', content, re.IGNORECASE):
                issues.append("⚠️  Generic fonts detected (should use Museo Sans or Open Sans)")

            # Check for non-brand blues
            if re.search(r'#0000FF|#0066CC|#1E90FF', content, re.IGNORECASE):
                issues.append(f"⚠️  Non-brand blue detected (should use {BRAND_COLORS['primary-blue']})")

            # Check for proper color usage
            if not re.search(r'#0092FF|--myb-primary-blue|myb-primary', content):
                issues.append("ℹ️  No brand primary color found")

            if issues:
                print("Brand Compliance Issues Found:")
                for issue in issues:
                    print(issue)
            else:
                print("✅ File appears to follow myBlueprint brand guidelines")

        except FileNotFoundError:
            print(f"Error: File '{filename}' not found")
    else:
        print(f"Unknown command: {command}")

if __name__ == "__main__":
    main()
