import unittest
from Lights import TrafficLightController

class TestTrafficLight(unittest.TestCase):
    def test_initial_state_is_safe(self):
        controller = TrafficLightController()
        self.assertEqual(controller.ns_light, "Green")
        self.assertEqual(controller.ew_light, "Red")

    def test_tick_changes_green_to_yellow(self):
        controller = TrafficLightController()
        controller.tick()
        self.assertEqual(controller.ns_light, "Yellow")
        self.assertEqual(controller.ew_light, "Red")
    def test_second_tick_swaps_active_direction(self):
        controller = TrafficLightController()
        controller.tick() 
        controller.tick() 
        
        self.assertEqual(controller.ns_light, "Red")
        self.assertEqual(controller.ew_light, "Green")

    def test_third_tick_changes_ew_to_yellow(self):
        controller = TrafficLightController()
        controller.tick() 
        controller.tick() 
        controller.tick() 
        
        self.assertEqual(controller.ns_light, "Red")
        self.assertEqual(controller.ew_light, "Yellow")

    def test_fourth_tick_completes_cycle(self):
        controller = TrafficLightController()
        controller.tick() 
        controller.tick() 
        controller.tick() 
        controller.tick() 
        
        self.assertEqual(controller.ns_light, "Green")
        self.assertEqual(controller.ew_light, "Red")
if __name__ == '__main__':
    unittest.main()