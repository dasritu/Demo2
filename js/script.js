

  // Set the target date
const targetDate = new Date('August 27, 2023 00:00:00').getTime();

// Update the countdown every second
const countdown = setInterval(() => {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the remaining time in milliseconds
  const distance = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown in the "countdown" element
  document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // Check if the countdown has ended
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById('countdown').innerHTML = 'Countdown Ended';
  }
}, 1000);


