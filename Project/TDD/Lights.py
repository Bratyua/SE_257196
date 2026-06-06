class TrafficLightController:
    def __init__(self):
        self.ns_light = "Green"
        self.ew_light = "Red"

    def tick(self):
        if self.ns_light == "Green":
            self.ns_light = "Yellow"
        elif self.ns_light == "Yellow":
            self.ns_light = "Red"
            self.ew_light = "Green"
        elif self.ew_light == "Green":
            self.ew_light = "Yellow"