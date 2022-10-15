window.addEventListener("scroll", (event) => {
  // Handle Scrolling On Skills Section
  handleScrollOnSkillsSection();

  // Handle The Counter In The Stats Section
  handleScrollOnStatsSection();
});

const handleScrollOnSkillsSection = () => {
  const skills = document.getElementById("skills");
  let isScrolledToSkills = false;

  if (this.scrollY >= skills.offsetTop - 150 && !isScrolledToSkills) {
    let progressContainer = document.querySelectorAll(
      ".skills .langages .lang .progress > span"
    );
    progressContainer.forEach((progress) => {
      progress.style.width = progress.dataset.progress;
    });
    isScrolledToSkills = true;
  }
};

const handleScrollOnStatsSection = () => {
  const stats = document.getElementById("stats");
  let isScrolledToStats = false;

  if (this.scrollY >= stats.offsetTop - 150 && !isScrolledToStats) {
    let statsNumber = document.querySelectorAll(
      ".stats .card span.stat-number"
    );

    statsNumber.forEach((stat) => {
      const intervalCode = setInterval(() => {
        if (stat.textContent == stat.dataset.goal) {
          clearInterval(intervalCode);
        } else {
          stat.textContent++;
        }
      }, 2000 / stat.dataset.goal);
    });
    isScrolledToStats = true;
  }
};

// Handle Events Section Count Down Timer
const eventTime = "Dec 31, 2022 23:59:59";
handleEventTimer(eventTime);

function handleEventTimer(time) {
  const intervalCode = setInterval(() => {
    // Get time difference in milliseconds
    const dateNow = new Date().getTime();
    const eventDate = new Date(time).getTime();
    const timeDiff = eventDate - dateNow;

    // Check if it is the time of the event
    if (timeDiff <= 0) {
      clearInterval(intervalCode);
    } else {
      // Calculate the time unites
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      // Push the time unites to the document
      document.querySelector(
        ".events .content .info .timer .time-field.days span"
      ).innerHTML = days < 10 ? `0${days}` : days;
      document.querySelector(
        ".events .content .info .timer .time-field.hours span"
      ).innerHTML = hours < 10 ? `0${hours}` : hours;
      document.querySelector(
        ".events .content .info .timer .time-field.minutes span"
      ).innerHTML = minutes < 10 ? `0${minutes}` : minutes;
      document.querySelector(
        ".events .content .info .timer .time-field.seconds span"
      ).innerHTML = seconds < 10 ? `0${seconds}` : seconds;
    }
  }, 1000);
}
