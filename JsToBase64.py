import argparse
import base64
import sys
import os

def js_to_base64_wrapper(js_code: str) -> str:
    """Encodes JavaScript code into base64 and wraps it in an HTML <script>."""
    encoded_js = base64.b64encode(js_code.encode()).decode()
    html_wrapper = f"""eval(atob("{encoded_js}"));"""
    return html_wrapper.strip()

def main():
    parser = argparse.ArgumentParser(description="Convert JavaScript to Base64 and wrap it for execution in HTML.")
    
    group = parser.add_mutually_exclusive_group(required=True)
    group.add_argument('--file', '-f', type=str, help="Path to the JavaScript file to encode.")
    group.add_argument('--code', '-c', type=str, help="Raw JavaScript code to encode.")
    
    parser.add_argument('--output', '-o', type=str, help="Output file to write the result to (optional).")
    
    args = parser.parse_args()

    # Load JS code from file or CLI
    if args.file:
        if not os.path.isfile(args.file):
            print(f"[-] File not found: {args.file}")
            sys.exit(1)
        with open(args.file, 'r', encoding='utf-8') as f:
            js_code = f.read()
    else:
        js_code = args.code

    # Generate HTML-wrapped Base64 JS
    output_html = js_to_base64_wrapper(js_code)

    # Output result
    if args.output:
        with open(args.output, 'w', encoding='utf-8') as out_file:
            out_file.write(output_html)
        print(f"[+] Output written to {args.output}")
    else:
        print(output_html)

if __name__ == "__main__":
    main()

