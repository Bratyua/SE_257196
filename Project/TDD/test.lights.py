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

if __name__ == '__main__':
    unittest.main()