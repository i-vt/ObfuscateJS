PLACEHOLDER = "// ThisIsAPlaceholder438u24iu3riujas70983274028734"

template = ""
with open("template.html", "r") as f: template = f.read()

replacement = ""
with open("replacement.js", "r") as f: replacement = f.read()

print(template.replace(PLACEHOLDER, replacement))
