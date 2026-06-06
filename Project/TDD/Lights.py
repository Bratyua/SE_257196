class TrafficLightController:
    def __init__(self):
        self.ns_light = "Green"
        self.ew_light = "Red"

    def tick(self):
        self.ns_light = "Yellow"