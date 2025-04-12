import argparse
import random
import string
import sys

def generate_random_name(length=None):
    length = length or random.randint(6, 12)
    return ''.join(random.choices(string.ascii_lowercase, k=length))

def generate_random_value(length=None):
    length = length or random.randint(4, 10)
    return ''.join(random.choices(string.ascii_letters, k=length))

def generate_random_var():
    name = generate_random_name()
    value = generate_random_value()
    return f"    var {name} = '{value}';"

def inject_random_vars(js_code, count=5):
    lines = js_code.splitlines()
    total_lines = len(lines)
    insert_positions = random.sample(range(total_lines + 1), min(count, total_lines + 1))
    insert_positions.sort()

    new_lines = []
    injection_idx = 0

    for i in range(total_lines + 1):
        if injection_idx < len(insert_positions) and i == insert_positions[injection_idx]:
            new_lines.append(generate_random_var())
            injection_idx += 1
        if i < total_lines:
            new_lines.append(lines[i])

    return "\n".join(new_lines)

def main():
    parser = argparse.ArgumentParser(description="Inject random JS variable declarations into code at random positions.")
    
    group = parser.add_mutually_exclusive_group(required=True)
    group.add_argument('--file', '-f', type=str, help="Path to the JavaScript file to process.")
    group.add_argument('--code', '-c', type=str, help="Raw JavaScript code to process.")
    
    parser.add_argument('--output', '-o', type=str, help="Output file to write the result to (optional).")
    parser.add_argument('--count', '-n', type=int, default=5, help="Number of random variables to inject (default: 5).")

    args = parser.parse_args()

    if args.file:
        try:
            with open(args.file, 'r', encoding='utf-8') as f:
                js_code = f.read()
        except Exception as e:
            print(f"Error reading file: {e}")
            sys.exit(1)
    else:
        js_code = args.code

    modified_js = inject_random_vars(js_code, count=args.count)

    if args.output:
        try:
            with open(args.output, 'w', encoding='utf-8') as f:
                f.write(modified_js)
            print(f"Modified code written to {args.output}")
        except Exception as e:
            print(f"Error writing output: {e}")
            sys.exit(1)
    else:
        print(modified_js)

if __name__ == '__main__':
    main()

