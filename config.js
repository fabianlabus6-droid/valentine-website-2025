// Basic Information
valentineName: "Oliwia"                    // Your Valentine's name
pageTitle: "Czy zostaniesz moją walentynką? 💝" // Browser tab title

// Floating Background Elements
floatingEmojis: {
    hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis in background
    bears: ['🧸', '🐻']                       // Bear emojis in background
}

// Questions and Buttons
questions: {
    first: {
        text: "Czy mnie lubisz?",                   // First question
        yesBtn: "Tak",                             // Yes button text
        noBtn: "Nie",                               // No button text
        secretAnswer: "Lubię cię i kocham! ❤️"  // Hidden message
    },
    second: {
        text: "Jak bardzo mnie kochasz?",          // Second question
        startText: "Tak bardzo!",                   // Text before percentage
        nextBtn: "Next ❤️"                         // Next button text
    },
    third: {
        text: "Czy zostaniesz moją walentynką...?",      // Final question
        yesBtn: "Tak!",                            // Yes button text
        noBtn: "Nie"                                // No button text
    }
}

// Love Meter Messages
loveMessages: {
    extreme: "WOOOOW aż tak mnie kochasz?? 🥰🚀💝",  // Shows above 5000%
    high: "Nieskończoność! 🚀💝",              // Shows above 1000%
    normal: "Bardzo! 🥰"                           // Shows above 100%
}

// Final Celebration
celebration: {
    title: "Yay! Jestem najszczęsliwszym chłopakiem na świecie...",     // Celebration title
    message: "Teraz dam ci prezent...",          // Celebration message
    emojis: "🎁💖🤗💝💋❤️💕"                        // Celebration emojis
}

// Website Colors
colors: {
    backgroundStart: "#ffafbd",      // Background gradient start
    backgroundEnd: "#ffc3a0",        // Background gradient end
    buttonBackground: "#ff6b6b",     // Button color
    buttonHover: "#ff8787",          // Button hover color
    textColor: "#ff4757"            // Text color
}

// Animation Settings
animations: {
    floatDuration: "15s",           // How long hearts float (10-20s)
    floatDistance: "50px",          // Sideways movement (30-70px)
    bounceSpeed: "0.5s",            // Bounce animation speed (0.3-0.7s)
    heartExplosionSize: 1.5         // Final heart explosion size (1.2-2.0)
}

// Music Settings
music: {
    enabled: true, // Music feature is enabled
    autoplay: true, // Try to autoplay (note: some browsers may block this)
    musicUrl: "YOUR_CLOUDINARY_URL_HERE", // Paste your music URL here
    startText: "🎵 Play Music", // Button text to start music
    stopText: "🔇 Stop Music", // Button text to stop music
    volume: 0.5 // Volume level (0.0 to 1.0)
}
