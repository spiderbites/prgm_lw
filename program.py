from LateTime import *
import sys

# INFILE = "program-test.csv"
# OUTFILE = "program-out-test.html"

INFILE = sys.argv[1]
OUTFILE = sys.argv[2]
JAVAOUT = sys.argv[3]

TIPSTERTOP = open('tipstertop', 'r').read()

class Act(object):
        
    def __init__(self, name, start, end, room, type, descrip, img):
        # input time is HH:MM
        self.name = name
        
        if start != "":
            h, m = start.split(":")
            self.start = LateTime(int(h),int(m))
            h, m = end.split(":")
            self.end = LateTime(int(h),int(m))
        else: # this is an ALL NIGHT act
            self.start = None
            self.end = None
        
        self.room = room
        self.type = type.lower()
        self.descrip = descrip
        self.img = img
        
    def __repr__(self):
        return "{0} start:{1} end:{2}".format(self.name, self.start, self.end)
        
    def length(self, units=LateTime(0,15)):
        '''Return length of set as number of LateTime units.'''        
        ln = 0
        end = self.end
        while end != self.start:
            ln += 1
            end -= units
        return ln
    

class ActWriter(object):
    
    def __init__(self, acts, all_night_acts, room_list, outfile, javaout):
        '''List of Acts, open output file'''
        self.acts = acts
        self.all_night_acts = all_night_acts
        self.outfile = outfile
        self.javaout = javaout
        self.num_rooms = len(room_list)
        self.time_unit = LateTime(0,15)
        self.cur_end_time = acts[0].end + self.time_unit  # end time of the latest act should be first in list?...
                                                       # figure this out better
        self.room_list = room_list
        self.occupied = [0] * self.num_rooms
        
        self.type_list = self.make_type_list()
    
    def make_type_list(self):
        types = set()
        for a in acts + all_night_acts:
            types.add(a.type)
        return types
    
    def get_next_time(self):
        return self.cur_end_time - self.time_unit
    
    def find_act(self, room, endtime):
        '''Return the Act object in the given room ending at endtime'''
        for i, act in enumerate(self.acts):
            if (room == act.room) and (endtime == act.end):
                return acts.pop(i)
        return None
    
    def write_act(self, act):
        self.outfile.write('<td class="{0}" id="{1}" rowspan="{2}">{3}</td>\n'.format(act.type, act_id(act.name), act.length(), act.name))
        
    def write_empty(self):
        self.outfile.write('<td><!-- empty --></td>\n')
    
    def write_next_time(self, endtime):
        '''Write a time in a header cell tag. The time is one one time unit less
        than endtime (a LateTime object), since it indicates the start of the
        last time unit.'''
        self.outfile.write("<tr>\n<th>{0}</th>\n".format(str(endtime - self.time_unit)))
            
    def write_row(self):
        self.cur_end_time = self.get_next_time()
        self.write_next_time(self.cur_end_time)
        for i, room in enumerate(self.room_list):
            if not self.occupied[i]:
                act = self.find_act(room, self.cur_end_time)
                if act:
                    self.occupied[i] = act.length()
                    self.write_act(act)
                else:
                    self.write_empty()        
        self.occupied = [n - 1 if n > 0 else n for n in self.occupied]
        self.outfile.write('</tr>\n')
    
    def write_table_header(self):
        self.outfile.write('<br><br><h1><center>SCHEDULE</center></h1><table class="program" width="100%" align="center">\n<tbody>\n<tr>\n<th title="times"></th>\n')
        for room in self.room_list:
            self.outfile.write('<th>' + room + '</th>\n')
        self.outfile.write('<th></th>\n</tr>\n')
        
    def write_table_footer(self):
        self.outfile.write('<tr><th></th></tr>\n</tbody>\n</table>')
    
    def write(self):       
        self.javawrite()
        self.write_type_key()
        self.write_all_night()
        self.write_table_header()
        while not (self.acts == [] and self.occupied == [0] * self.num_rooms):
            self.write_row()
        self.write_table_footer()        
               
    def javawrite(self):
        
        self.javaout.write(TIPSTERTOP)
        
        self.javaout.write("<script>\n\t$(document).ready(function() {\n\t\t$('.tooltip').tooltipster();\n\t});")
        
        for act in self.acts:
            self.javaout.write("\t$(document).ready(function() {{\n\t\t$('#{0}').tooltipster({{\n\t\t\tcontent: $(\"<img src='{1}' border=1/><p style='text-align:left;'><strong>{2}</strong><br />{3} - {4}<br /><em>{5}</em><br />{6}</p>\"),\n\t\t\tinteractive: true,\n\t\t\tanimation: 'grow',\n\t\t\tmaxWidth: 500\n\t\t}});}});".format(act_id(act.name), act.img.strip(), act.name, act.start, act.end, act.room, act.descrip))
                    
        for act in self.all_night_acts:
            self.javaout.write("\t$(document).ready(function() {{\n\t\t$('#{0}').tooltipster({{\n\t\t\tcontent: $(\"<img src='{1}' border=1/><p style='text-align:left;'><strong>{2}</strong><br />All Night<br /><em>{3}</em><br />{4}</p>\"),\n\t\t\tinteractive: true,\n\t\t\tanimation: 'grow',\n\t\t\tmaxWidth: 500\n\t\t}});}});".format(act_id(act.name), act.img.strip(), act.name, act.room, act.descrip))
                    
        self.javaout.write("</script>")
        
    
    def write_type_key(self):
        self.outfile.write('<table class="program" width="100%" align="center">\n<tbody>\n<tr>')
        for tipe in self.type_list:
            self.outfile.write('<td class="{0}">{1}</td>'.format(tipe, tipe.capitalize()))
        self.outfile.write('</tr>\n</tbody>\n</table>\n\n')
        
    def write_all_night(self):
        self.outfile.write('<h1><center>RUNNING ALL NIGHT</center></h1><table class="program" width="100%" align="center">\n<tbody>\n<tr>\n<th>Where</th><th>What</th>\n</tr>\n')
        for act in self.all_night_acts:
            self.outfile.write('<tr><td>{0}</td><td class="{1}" id="{2}">{3}</td></tr>\n'.format(act.room, act.type, act_id(act.name), act.name))
        self.outfile.write('</tbody>\n</table>\n\n')


def make_acts(infile):
    f = open(infile, 'r')
    f.readline() #skip headers
    acts = []
    all_night_acts = []
    for line in f:
        line = special_split(line, ',','"')
        if line[0]:  #check not a blank line
            
            # combine cells that were incorrectly split for containing commas
            for i in range(len(line)-1):
                if line[i].startswith('"') and line[i+1].endswith('"'):
                    line[i] = line[i] + line[i+1]
                    line.pop(i+1)
            
            # make the acts
            try:
                act = Act(*line)
            except TypeError:
                print line
            
            if act.start is None:
                all_night_acts.append(act)
            else:
                acts.append(act)
    return sorted(acts, key=lambda act: act.end, reverse=True), all_night_acts
    
def make_room_list(acts):
    rooms = set()
    for a in acts:
        rooms.add(a.room)
    return rooms

def special_split(s, dlmtr, spec):
    '''Split a string s into a list using delimiter, unless surrounded by special'''
    l = []
    builder = ""
    started = False
    while s != "":
        #starting
        if s[0] == dlmtr:
            if not started:
                l.append(builder)
                builder = ""
            else:
                builder += s[0]
        elif s[0] == spec and not started:
            started = True
        elif s[0] == spec:
            started = False
        else:
            builder += s[0]
        s = s[1:]
    l.append(builder)
    return l
            
def act_id(name):
    return ''.join(e.lower() for e in name if e.isalnum())

    
if __name__ == "__main__":
    
    f = open(OUTFILE, 'w')
    j = open(JAVAOUT, 'w')
    
    acts, all_night_acts = make_acts(INFILE)
    
    aw = ActWriter(acts, all_night_acts, make_room_list(acts), f, j)
    
    aw.write()
    
    f.close()
    j.close()