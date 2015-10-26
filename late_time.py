class ComparableMixin:
    def __eq__(self, other):
        return not self<other and not other<self
    def __ne__(self, other):
        return self<other or other<self
    def __gt__(self, other):
        return other<self
    def __ge__(self, other):
        return not self<other
    def __le__(self, other):
        return not other<self

class LateTime(object, ComparableMixin):
    # ordering for LateTime
    # h is [5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4]
    # m is [0, 15, 30, 45]
    # m is [0...59]
    
    hs = [5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4]
    
    def __init__(self, h, m):
        self.h = h
        self.m = m
    
    def __lt__(self, other):
        
        # 5:05 vs. 5:10
        # 5:05 vs. 4:50
        # 5:05 vs. 5:00
        # 5:05 vs. 6:00
        
        if self.hs.index(self.h) < self.hs.index(other.h):
            return True
        elif self.hs.index(self.h) > self.hs.index(other.h):
            return False
        else:
            return self.m < other.m
            
    def __repr__(self):
        return str(self.h) + ":" + '%02d' % self.m
        
    def __add__(self, other):
        mins = (self.m + other.m) % 60
        hrs = ((self.h + other.h) % 12 + (self.m + other.m) / 60)    
        hrs = 12 if hrs == 0 else hrs
        return LateTime(hrs, mins)
        
    def __sub__(self, other):
        mins = (self.m - other.m) % 60
        hrs = (self.h - other.h) % 12
        hrs = 12 if hrs == 0 else hrs
        hrs += (self.m - other.m) / 60
        hrs = 12 if hrs == 0 else hrs
        return LateTime(hrs, mins)