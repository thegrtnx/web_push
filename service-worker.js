self.addEventListener("push", function (event) {
	console.log("Push event received:", event);

	const data = event.data ? event.data.text() : "No payload";

	const options = {
		body: data,
		icon: "icon.png", // optional
		badge: "badge.png", // optional
	};

	event.waitUntil(self.registration.showNotification("Notification Title", options));
});
