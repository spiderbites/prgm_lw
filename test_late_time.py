import unittest
from LateTime import *

class TestCases(unittest.TestCase):
    
    def setUp(self):
        self.five = LateTime(5,0)
        self.five_fifteen = LateTime(5,15)
        self.five_thirty = LateTime(5,30)
        self.five_fortyfive = LateTime(5,45)
        self.eleven = LateTime(11,0)
        self.eleven = LateTime(11,45)
        
        self.zero = LateTime(0,0)
        self.fifteen = LateTime(0,15)
        self.thirty = LateTime(0,30)
        self.fortyfive = LateTime(0,45)    
    
    def test_add_mins(self):
        self.assertEqual(self.five + self.zero, self.five, "Add zero")
        self.assertEqual(self.five + self.fortyfive, self.five_fortyfive, "Add 45")
        
    def test_add_mins_carry(self):
        self.assertEqual(self.five_thirty + self.thirty, LateTime(6,0), "Add thirty carry")
        self.assertEqual(self.five_fortyfive + self.fortyfive, LateTime(6,30), "Add forty-five carry")
    
    def test_add_mins_carry_hour(self):
        self.assertEqual(LateTime(12,30) + LateTime(0, 30), LateTime(1,0), "Mins, Hr carry")
        
        self.assertEqual(LateTime(5,30) + LateTime(5,30), LateTime(11,0))
    
    
    def test_sub_mins(self):
        self.assertEqual(self.five - self.zero, self.five, "sub zero")
        self.assertEqual(self.five_fortyfive - self.thirty, self.five_fifteen, "sub 30")
    
    def test_sub_mins_carry(self):
        self.assertEqual(self.five_fifteen - self.fortyfive, LateTime(4,30), "Minus fortyfive carry")
        
    def test_sub_mins_carry_hour(self):
        self.assertEqual(LateTime(1,30) - LateTime(2, 0), LateTime(11,30), "Mins, Hr carry")
        self.assertEqual(LateTime(11,30) - LateTime(5,30), LateTime(6,0))
        self.assertEqual(LateTime(12,0) - LateTime(0,30), LateTime(11,30))
        
if __name__ == '__main__':
    unittest.main()
