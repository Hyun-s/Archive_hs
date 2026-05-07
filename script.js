// Modern CV and Calendar Application
document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);

            // Hide all sections
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));

            // Add active class to clicked link
            this.classList.add('active');

            // Show corresponding section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });

    // Handle hash change (for direct URL access)
    window.addEventListener('hashchange', function() {
        const hash = window.location.hash.substring(1);
        if (hash) {
            // Hide all sections
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));

            // Activate corresponding section and link
            const targetSection = document.getElementById(hash);
            const targetLink = document.querySelector(`[href="#${hash}"]`);

            if (targetSection) {
                targetSection.classList.add('active');
            }

            if (targetLink) {
                targetLink.classList.add('active');
            }
        }
    });

    // Initialize based on current hash or default to first section
    function initializePage() {
        const hash = window.location.hash.substring(1);
        const activeSection = hash ? document.getElementById(hash) : document.querySelector('.section');
        const activeLink = hash ? document.querySelector(`[href="#${hash}"]`) : document.querySelector('.nav-link');

        // Hide all sections
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));

        // Activate appropriate section and link
        if (activeSection) {
            activeSection.classList.add('active');
        }

        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    // Initialize page
    initializePage();

    // Calendar functionality
    const calendarGrid = document.querySelector('.calendar-grid');
    const currentMonthElement = document.querySelector('.current-month');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const eventsContainer = document.getElementById('events-container');

    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    // Sample events data
    const events = [
        { date: new Date(2026, 4, 15), title: 'Team Meeting', time: '10:00 AM' },
        { date: new Date(2026, 4, 18), title: 'Project Deadline', time: '5:00 PM' },
        { date: new Date(2026, 4, 22), title: 'Conference Call', time: '2:00 PM' },
        { date: new Date(2026, 4, 25), title: 'Client Presentation', time: '3:00 PM' },
        { date: new Date(2026, 4, 28), title: 'Vacation Start', time: 'All Day' }
    ];

    // Initialize calendar
    renderCalendar(currentMonth, currentYear);
    renderEvents();

    // Event listeners for calendar navigation
    prevBtn.addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar(currentMonth, currentYear);
    });

    nextBtn.addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar(currentMonth, currentYear);
    });

    // Render calendar function
    function renderCalendar(month, year) {
        // Clear existing calendar cells (except weekday headers)
        const calendarCells = document.querySelectorAll('.calendar-cell');
        calendarCells.forEach(cell => cell.remove());

        // Update current month display
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                           'July', 'August', 'September', 'October', 'November', 'December'];
        currentMonthElement.textContent = `${monthNames[month]} ${year}`;

        // Get first day of month and total days
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Get days from previous month to show
        const prevMonthDays = new Date(year, month, 0).getDate();

        // Create calendar cells
        let dayCount = 1;

        // Previous month's days
        for (let i = firstDay - 1; i >= 0; i--) {
            createCalendarCell(prevMonthDays - i, true);
        }

        // Current month's days
        const today = new Date();
        for (let i = 1; i <= daysInMonth; i++) {
            const isToday = (i === today.getDate() && month === today.getMonth() && year === today.getFullYear());
            const hasEvent = events.some(event =>
                event.date.getDate() === i &&
                event.date.getMonth() === month &&
                event.date.getFullYear() === year
            );

            createCalendarCell(i, false, isToday, hasEvent);

            dayCount++;
        }

        // Next month's days
        const totalCells = 42; // 6 weeks
        const remainingCells = totalCells - dayCount;
        for (let i = 1; i <= remainingCells; i++) {
            createCalendarCell(i, true);
        }
    }

    // Helper function to create calendar cells
    function createCalendarCell(day, isOtherMonth, isToday = false, hasEvent = false) {
        const cell = document.createElement('div');
        cell.className = 'calendar-cell';
        cell.textContent = day;

        if (isOtherMonth) {
            cell.classList.add('other-month');
        } else if (isToday) {
            cell.classList.add('today');
        }

        if (hasEvent) {
            cell.classList.add('event');
        }

        // Add click event for selecting dates
        cell.addEventListener('click', () => {
            // Remove highlight from all cells
            document.querySelectorAll('.calendar-cell').forEach(c => c.classList.remove('selected'));

            // Highlight clicked cell
            cell.classList.add('selected');

            // In a real application, this would open a date picker or event form
            alert(`Selected date: ${cell.textContent}`);
        });

        calendarGrid.appendChild(cell);
    }

    // Render events list
    function renderEvents() {
        eventsContainer.innerHTML = '';

        // Sort events by date
        const sortedEvents = [...events].sort((a, b) => a.date - b.date);

        sortedEvents.forEach(event => {
            const eventDate = event.date;
            const eventElement = document.createElement('div');
            eventElement.className = 'event-item';
            eventElement.innerHTML = `
                <div class="event-title">${event.title}</div>
                <div class="event-date">${eventDate.toLocaleDateString('en-US', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric'
                })}</div>
                <div class="event-time">${event.time}</div>
            `;

            eventsContainer.appendChild(eventElement);
        });

        // If no events, show message
        if (sortedEvents.length === 0) {
            eventsContainer.innerHTML = '<p>No upcoming events</p>';
        }
    }

    // Simulate loading of content with fade effect
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Additional enhancements
window.addEventListener('load', function() {
    // Add scroll animation effects
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.8s ease forwards';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});