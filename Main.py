import json


x = 123.34

y = json.dumps(x)

print(y)

def main(args):
    return 0

if __name__ == '__main__':
    import sys
    sys.exit(main(sys.argv))
