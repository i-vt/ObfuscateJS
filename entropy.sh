#!/bin/bash

# entropy.sh - Estimates the entropy (in bits per byte) of a given file

if [ $# -ne 1 ]; then
    echo "Usage: $0 <filename>"
    exit 1
fi

FILE="$1"

if [ ! -f "$FILE" ]; then
    echo "Error: File '$FILE' not found."
    exit 2
fi

xxd -p "$FILE" | tr -d '\n' | fold -w2 | sort | uniq -c | \
awk '{
    sum += $1;
    freq[$2] = $1
}
END {
    for (b in freq) {
        p = freq[b] / sum;
        ent += -p * log(p) / log(2)
    }
    printf("Entropy: %.6f bits per byte\n", ent)
}'

