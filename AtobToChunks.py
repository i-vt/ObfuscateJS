import argparse
import base64
import os
import textwrap
import random

def random_var(length=6):
    return ''.join(random.choices('abcdefghijklmnopqrstuvwxyz', k=length))


def split_base64(s, min_chunk=3, max_chunk=10):
    chunks = []
    i = 0
    while i < len(s):
        remaining = len(s) - i
        if remaining <= max_chunk:
            chunks.append(s[i:])
            break
        else:
            max_valid_chunk = min(max_chunk, remaining - min_chunk)
            chunk_size = random.randint(min_chunk, max_valid_chunk)
            chunks.append(s[i:i + chunk_size])
            i += chunk_size
    return chunks


def obfuscate_encoded_js(b64_string):
    chunks = split_base64(b64_string)
    arr_var = random_var()
    joiner_var = random_var()
    atob_var = random_var()
    func_var = random_var()

    array_js = "[" + ','.join(f'"{chunk}"' for chunk in chunks) + "]"

    return f"""(function() {{
    var {arr_var} = {array_js};
    var {joiner_var} = {arr_var}.join("");
    var {atob_var} = this["\\x61\\x74\\x6f\\x62"];
    var {func_var} = Function;
    {func_var}({atob_var}({joiner_var}))();
}})();"""

def main():
    parser = argparse.ArgumentParser(description="Convert JavaScript to Base64 and wrap it for execution in HTML.")
    
    group = parser.add_mutually_exclusive_group(required=True)
    group.add_argument('--file', '-f', type=str, help="Path to the JavaScript file to encode.")
    group.add_argument('--code', '-c', type=str, help="Raw JavaScript code to encode.")
    
    parser.add_argument('--output', '-o', type=str, help="Output file to write the result to (optional).")

    args = parser.parse_args()

    if args.file:
        if not os.path.exists(args.file):
            raise FileNotFoundError(f"File not found: {args.file}")
        with open(args.file, 'r', encoding='utf-8') as f:
            js_code = f.read()
    else:
        js_code = args.code

    b64_encoded = base64.b64encode(js_code.encode('utf-8')).decode('utf-8')
    obfuscated_js = obfuscate_encoded_js(b64_encoded)

    if args.output:
        with open(args.output, 'w', encoding='utf-8') as f:
            f.write(obfuscated_js)
        print(f"Obfuscated code written to {args.output}")
    else:
        print(obfuscated_js)

if __name__ == '__main__':
    main()

