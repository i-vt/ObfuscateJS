import re
import random
import string
import argparse

# Sample dictionary list (can be extended or replaced with a full word list)
dictionary_words = [
    'hello', 'world', 'function', 'variable', 'object', 'string', 'number',
    'array', 'loop', 'code', 'compile', 'script', 'value', 'return', 'define',
    'constant', 'export', 'import', 'debug', 'async', 'await', 'event'
]

def generate_random_words(n=15, dict_ratio=0.9):
    words = []
    for _ in range(random.randint(1,n)):
        if random.random() < dict_ratio and dictionary_words:
            word = random.choice(dictionary_words)
        else:
            word = ''.join(random.choices(string.ascii_lowercase, k=random.randint(4, 8)))
        words.append(word)
    return ' '.join(words)

def add_random_comments_to_js(js_code):
    lines = js_code.splitlines()
    output = []
    function_pattern = re.compile(r'^\s*(function\s+\w+|\w+\s*=\s*function|\w+\s*:\s*function|\w+\s*\(.*\)\s*{)')

    for line in lines:
        if function_pattern.search(line):
            output.append(f"// {generate_random_words()}")
        elif random.random() < 0.15:
            output.append(f"// {generate_random_words()}")
        output.append(line)

    return '\n'.join(output)

def main():
    parser = argparse.ArgumentParser(description="Add random comments to JavaScript code.")
    group = parser.add_mutually_exclusive_group(required=True)
    group.add_argument('--file', '-f', type=str, help="Path to the JavaScript file to process.")
    group.add_argument('--code', '-c', type=str, help="Raw JavaScript code to process.")
    parser.add_argument('--output', '-o', type=str, help="Output file to write the result to (optional).")

    args = parser.parse_args()

    if args.file:
        with open(args.file, 'r') as f:
            js_code = f.read()
    else:
        js_code = args.code

    commented_code = add_random_comments_to_js(js_code)

    if args.output:
        with open(args.output, 'w') as f:
            f.write(commented_code)
        print(f"Output written to {args.output}")
    else:
        print(commented_code)

if __name__ == "__main__":
    main()

