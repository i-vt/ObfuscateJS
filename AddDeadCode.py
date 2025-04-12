import argparse
import random
import os
import string
def generate_false_js_conditions(count=5):
    false_conditions = set()

    while len(false_conditions) < count:
        option = random.choice([
            lambda: f"if ({random.randint(1, 100)} > {random.randint(101, 200)})",
            lambda: f"if ({random.randint(1, 10)} === {random.randint(11, 20)})",
            lambda: f"if ('{random.choice(string.ascii_lowercase)}' === '{random.choice(string.ascii_uppercase)}')",
            lambda: f"if (typeof {random.choice(['window', 'document', 'navigator'])} === 'undefined')",
            lambda: f"if ({random.random():.2f} && false)",
            lambda: f"if (!true && {random.randint(0,1)})",
            lambda: f"if ('{random.choice(['true', 'false'])}' === true)",
            lambda: f"if (Array.isArray({random.randint(1, 10)}))",
            lambda: f"if ({random.randint(0, 10)} instanceof String)",
            lambda: f"if (null === {random.randint(0, 5)})",
        ])
        false_conditions.add(option())

    return list(false_conditions)


def get_all_js_files(directory='./deadcode'):
    js_files = []
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.js'):
                js_files.append(os.path.abspath(os.path.join(root, file)))

    return js_files

JS_FILES = get_all_js_files()

def get_random_js():
    file_selected = random.choice(JS_FILES)

    with open (file_selected, "r") as f:
        return f.read()
    
    

def generate_code_cave():
    # This could be optimized
    condition = random.choice(generate_false_js_conditions())
    body = get_random_js()
    return f"{condition} {{\n    {body}\n}}\n"

def inject_code_caves(js_code, num_caves=3):
    lines = js_code.splitlines()
    if not lines:
        return js_code
    insertion_points = sorted(random.sample(range(len(lines)), min(num_caves, len(lines))))
    for i, point in enumerate(insertion_points):
        cave = generate_code_cave()
        lines.insert(point + i, cave)
    return "\n".join(lines)

def main():
    parser = argparse.ArgumentParser(description="Add non-executing code caves to JavaScript code.")
    group = parser.add_mutually_exclusive_group(required=True)
    group.add_argument('--file', '-f', type=str, help="Path to the JavaScript file to process.")
    group.add_argument('--code', '-c', type=str, help="Raw JavaScript code to process.")
    parser.add_argument('--output', '-o', type=str, help="Output file to write the result to (optional).")
    parser.add_argument('--caves', '-n', type=int, default=3, help="Number of code caves to insert (default: 3).")
    
    args = parser.parse_args()

    if args.file:
        with open(args.file, 'r', encoding='utf-8') as f:
            js_code = f.read()
    else:
        js_code = args.code

    modified_code = inject_code_caves(js_code, num_caves=args.caves)

    if args.output:
        with open(args.output, 'w', encoding='utf-8') as f:
            f.write(modified_code)
        print(f"Modified code written to {args.output}")
    else:
        print(modified_code)

if __name__ == '__main__':
    main()

