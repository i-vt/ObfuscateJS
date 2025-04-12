# ObfuscateJS
```
python3 JsToBase64.py --file main_payload.js > 2.js;
python3 AtobToChunks.py --file 2.js > 3.js;
python3 AtobChunkVariableSplitter.py --file 3.js > 4.js;
python3 AddRandomComments.py --file 4.js > 5.js;
python3 AddRandomDeclarations.py --file 5.js --count 1500 > 6.js;
python3 AddDeadCode.py --file 6.js --caves 420 > 7.js;
cp 7.js replacement.js;
./entropy.sh replacement.js
python3 make_html.py > 2.html
```

From this:
![image](https://github.com/user-attachments/assets/fb5840c8-6c2a-4dd9-9410-1b25ba628617)

To this:
![image](https://github.com/user-attachments/assets/b28bf6d2-14f9-48f2-b65d-ee6083b21890)
