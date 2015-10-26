### Long Winter Program
A bit of Python code that to create the online program for Long Winter, a monthly arts & music event in Toronto, from a CSV file.
See an example program here: http://www.torontolongwinter.com/program-march-13-2015/

See the example directory for the format of the input CSV and output HTML.

There are a ton of CSV to HTML programs out there, but there aren't many that can output merged cells, in particular we use cells spanning multiple rows for to capture acts spanning multiple time blocks.

This is a very specific implementation and I'll be looking to create a more agnostic version that will live here, as well as adding CSS generation.

### Usage

`python program.py infile.csv outfile.html outfile.js`
