self.addEventListener("push", function (event) {
	console.log("Push event received:", event);

	const data = event.data ? event.data.text() : "No payload";

	const options = {
		body: data,
		icon: "icon.png", // Optional
		badge: "badge.png", // Optional
	};

	event.waitUntil(self.registration.showNotification("Notification Title", options));
});
