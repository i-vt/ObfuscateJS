# ObfuscateJS

## Sample 
### From this:
![image](https://github.com/user-attachments/assets/fb5840c8-6c2a-4dd9-9410-1b25ba628617)
![image](https://github.com/user-attachments/assets/810837f9-a495-44a2-b147-5b768a7143f6)


### To this:
![image](https://github.com/user-attachments/assets/139e8a07-aab1-42ef-96b4-8742e0922149)


https://github.com/i-vt/ObfuscateJS/blob/main/samples/replacement.js

Mad respect to [paopao2]([url](https://github.com/paopao2/leetcode-js/tree/master)) for his repo of JS leetcode, I have added snippets of homie's code.

## Usage
```
python3 JsToBase64.py --file main_payload.js > 2.js;
python3 AtobToChunks.py --file 2.js > 3.js;
python3 AtobChunkVariableSplitter.py --file 3.js > 4.js;
python3 AddRandomComments.py --file 4.js > 5.js;
python3 AddRandomDeclarations.py --file 5.js --count 1500 > 6.js;
python3 AddDeadCode.py --file 6.js --caves 420 > 7.js;
cp 7.js replacement.js;
python3 make_html.py > obf_test_page.html
```

### Optional:
```
chmod +x ./entropy.py
./entropy.sh replacement.js
```

### Side-Note: 
- JsToBase64 is a prerequisite for AtobToChunks
- AtobToChunks is a prerequisite for AtobChunkVariableSplitter to work
- AddDeadCode requires to have JS files in `./deadcode`, the more the better
