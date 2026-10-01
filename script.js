function generateStrategy() {

    const audience = document.getElementById("audience").value;
    const goal = document.getElementById("goal").value;
    const budget = Number(document.getElementById("budget").value);

    let data = {};

    if (audience === "student") {

        data = {
            title: "🎓 Student Campaign",
            message: "Make your day smarter and easier.",
            platforms: ["Instagram", "YouTube", "WhatsApp"],
            content: [
                "Short Reels and funny videos",
                "Student-focused offers",
                "Influencer collaborations",
                "Campus ambassador campaigns"
            ]
        };

    } else if (audience === "fitness") {

        data = {
            title: "🏃 Fitness Campaign",
            message: "Stay hydrated. Stay active.",
            platforms: ["Instagram", "YouTube", "Facebook"],
            content: [
                "Workout Reels",
                "Fitness influencer promotions",
                "Before/after lifestyle content",
                "Fitness challenges and giveaways"
            ]
        };

    } else {

        data = {
            title: "💼 Professional Campaign",
            message: "Smart technology for your busy lifestyle.",
            platforms: ["LinkedIn", "Instagram", "YouTube"],
            content: [
                "Professional lifestyle videos",
                "Productivity-focused content",
                "LinkedIn advertising",
                "Premium product demonstrations"
            ]
        };
    }

    let goalText = "";

    switch (goal) {
        case "awareness":
            goalText = "Increase brand visibility and reach new customers.";
            break;

        case "traffic":
            goalText = "Drive users to the product website or landing page.";
            break;

        case "sales":
            goalText = "Convert social-media users into customers.";
            break;

        case "engagement":
            goalText = "Increase likes, comments, shares and followers.";
            break;
    }

    const result = document.getElementById("strategy");

    result.innerHTML = `
        <div class="strategy-box">

            <h3>${data.title}</h3>

            <p><strong>Ad Message:</strong> ${data.message}</p>

            <p>
                <strong>Campaign Goal:</strong>
                ${goalText}
            </p>

            <p><strong>Recommended Platforms:</strong></p>

            <div>
                ${data.platforms
                    .map(platform => `<span class="platform">${platform}</span>`)
                    .join("")}
            </div>

            <h3>📢 Content Strategy</h3>

            <ul>
                ${data.content
                    .map(item => `<li>${item}</li>`)
                    .join("")}
            </ul>

            <p>
                <strong>Suggested Daily Budget:</strong>
                ₹${budget.toLocaleString("en-IN")}
            </p>

        </div>
    `;
}


function calculateEngagement() {

    const impressions =
        Number(document.getElementById("impressions").value);

    const likes =
        Number(document.getElementById("likes").value);

    const comments =
        Number(document.getElementById("comments").value);

    const shares =
        Number(document.getElementById("shares").value);

    if (impressions <= 0) {
        alert("Please enter a valid number of impressions.");
        return;
    }

    const totalEngagement =
        likes + comments + shares;

    const engagementRate =
        (totalEngagement / impressions) * 100;

    document.getElementById("engagementResult").innerHTML = `
        📊 Total Engagement:
        ${totalEngagement.toLocaleString("en-IN")}
        <br><br>
        📈 Engagement Rate:
        ${engagementRate.toFixed(2)}%
    `;
}
