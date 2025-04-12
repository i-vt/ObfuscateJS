import argparse
import random
import string

def extract_array(js_code):
    start = js_code.find('["')
    end = js_code.find('];') + 1
    array_string = js_code[start:end].strip(';')
    return array_string, eval(array_string)

def replace_payload(full_line, replacing):
    lines = full_line.split("\n")
    lines[1] = replacing
    return "\n".join(lines)
    
def generate_random_dict(size):
    def random_word(length=15):
        return ''.join(random.choices(string.ascii_lowercase, k=random.randint(5,length)))

    return {i: random_word() for i in range(0, size)}

def process_js(js_code):
    var_name = js_code.split("var")[1].split(" ")[1]
    original_string, array_items = extract_array(js_code)
    my_dict = generate_random_dict(len(array_items))

    # Create the new JS code with separate variables
    new_js_code = "\n"
    for index, item in enumerate(array_items):
        new_js_code += f"    var {my_dict[index]} = '{item}';\n"

    new_js_code += f"    var {var_name} = ["
    new_js_code += ", ".join(f"{my_dict[index]}" for index in range(len(array_items)))
    new_js_code += "];\n"
    
    return replace_payload(js_code, new_js_code)

def main():
    parser = argparse.ArgumentParser(description="Process and modify JavaScript code with base64 encoding.")
    group = parser.add_mutually_exclusive_group(required=True)
    group.add_argument('--file', '-f', type=str, help="Path to the JavaScript file to process.")
    group.add_argument('--code', '-c', type=str, help="Raw JavaScript code to process.")
    
    parser.add_argument('--output', '-o', type=str, help="Output file to write the result to (optional).")
    args = parser.parse_args()

    if args.file:
        with open(args.file, 'r') as file:
            js_code = file.read()
    else:
        js_code = args.code

    modified_js = process_js(js_code)

    if args.output:
        with open(args.output, 'w') as file:
            file.write(modified_js)
        print(f"Processed JavaScript has been saved to {args.output}")
    else:
        print(modified_js)

if __name__ == "__main__":
    main()

