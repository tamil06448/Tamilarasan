"""
import re

s="this is python class for.2021 fresh bottom"
res=re.findall("",s)
res.sort()
print(res)"""

"""
import re

str='this thos those'
x=re.findall('th..?',str)
print(x)"""

"""
import re
exp=r'\b[A-Za-z0-9_.]+@[A-Za-z0-9]+\.[A-Za-z]{2,}'
email="mittal.ta06448@gmail.com"
res=re.fullmatch(exp,email)
print(res)"""

import re

exp=r'\d{10}'
mn="9876654321"
x=re.fullmatch(exp,mn)
print(x)
