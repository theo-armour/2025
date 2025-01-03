#! python
import sys

sys.stdout.write("hello from Python %s\n" % (sys.version,))

print("\n")

print(sys.version)

if 5 > 2:
  print("Five is greater than two!")

import random

print("Random",random.randrange(1, 10))
