document.addEventListener('DOMContentLoaded', () => {
	const menuToggle = document.querySelector('.menu-toggle');
	const siteNav = document.querySelector('#site-nav');
	const year = document.querySelector('#copyright-year');
	const contactForm = document.querySelector('#contact-form');

	if (menuToggle && siteNav) {
		menuToggle.addEventListener('click', () => {
			const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
			menuToggle.setAttribute('aria-expanded', String(!isOpen));
			menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
			siteNav.classList.toggle('is-open', !isOpen);
		});
		siteNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
			menuToggle.setAttribute('aria-expanded', 'false');
			menuToggle.setAttribute('aria-label', 'Open navigation');
			siteNav.classList.remove('is-open');
		}));
	}

	if (year) year.textContent = new Date().getFullYear();
	// CV: REPLACE FILE IN assets/documents/.
	// PROFILE PHOTO: REPLACE assets/images/profile/profile.jpg WITH MY PROFESSIONAL PHOTO.

	const hero = document.querySelector('#home');
	if (hero) {
		hero.querySelector('.hero-copy').innerHTML = `<p class="eyebrow">EXECUTIVE ASSISTANT</p><h1>Primma<br><em>Kioko</em></h1><p class="hero-title">Administrative Support Specialist</p><p class="hero-intro">Organized, detail-oriented administrative professional with hands-on experience coordinating programs, events, schedules, stakeholders, documentation, and day-to-day operations.</p><p class="hero-intro hero-support">I bring structure to busy environments, keep information and tasks organized, and follow work through from planning to completion.</p><div class="button-row"><a class="button button-primary" href="#projects">View My Work</a><a class="button button-outline" href="assets/CV/Primma Kioko.pdf" download>Download My CV</a><a class="text-link" href="#contact">Contact Me &#8594;</a></div>`;
		hero.querySelector('.hero-visual img').alt = 'Primma Kioko';
		hero.insertAdjacentHTML('afterend', `<section class="section-pad section-sand snapshot-section"><div class="container"><div class="snapshot-heading"><p class="eyebrow">Professional snapshot</p><p>Practical support across the details that keep work moving.</p></div><div class="snapshot-grid"><article><h3>Administrative Support</h3><p>Calendar, communication, documentation and task coordination.</p></article><article><h3>Program Coordination</h3><p>Planning, stakeholder coordination, logistics and reporting.</p></article><article><h3>Event &amp; Operations Support</h3><p>Event planning, budgeting, procurement and reconciliation.</p></article><article><h3>Digital Workflows</h3><p>Google Workspace, Microsoft 365, Canva and AI productivity tools.</p></article></div></div></section>`);
	}

	const literacyDetails = document.querySelector('#literacy-details');
	const literacyInventory = literacyDetails && Array.from(literacyDetails.querySelectorAll('.detail-block')).find((block) => block.querySelector('h3')?.textContent.trim() === 'Inventory Management');
	if (literacyInventory) {
		const replacement = document.createElement('div');
		replacement.innerHTML = `
			<!-- LIBRARY BOOK INVENTORY & TRACKING: EDIT CONTENT HERE -->
			<div class="detail-block"><h3>Library Book Inventory &amp; Tracking</h3><ul class="detail-list"><li>Managed and tracked library book inventory.</li><li>Supported the manual book check-in and check-out process.</li><li>Supported the transition from the manual system to an online system.</li><li>Tracked books moving between locations and schools.</li><li>Supported the mobile library model by helping take books to schools.</li><li>Helped make books accessible to children in rural and hard-to-reach areas.</li></ul><div class="timeline compact-timeline"><span>BOOKS</span><b>&rarr;</b><span>CHECK-IN / CHECK-OUT</span><b>&rarr;</b><span>ONLINE RECORD-KEEPING</span><b>&rarr;</b><span>INVENTORY TRACKING</span><b>&rarr;</b><span>MOBILE LIBRARY</span><b>&rarr;</b><span>SCHOOL DELIVERY</span></div></div>
			<!-- SUPPLIES RECEIVING & INVENTORY: EDIT CONTENT HERE -->
			<div class="detail-block"><h3>Supplies Receiving &amp; Inventory</h3><ul class="detail-list"><li>Took inventory of supplies delivered to the organization.</li><li>Checked supplies received against the delivery.</li><li>Recorded and maintained inventory information.</li><li>Supported accurate tracking and accountability of delivered supplies.</li></ul><div class="timeline compact-timeline"><span>SUPPLIES DELIVERED</span><b>&rarr;</b><span>RECEIVED</span><b>&rarr;</b><span>INVENTORY CHECK</span><b>&rarr;</b><span>RECORD UPDATED</span><b>&rarr;</b><span>TRACKING &amp; DOCUMENTATION</span></div></div>`;
		literacyInventory.replaceWith(...replacement.children);
	}

	const aboutSection = document.querySelector('#about');
	if (aboutSection) {
		aboutSection.querySelector('.two-column').innerHTML = `<div class="section-heading"><p class="eyebrow">01 / About</p><h2>How I <em>Work</em></h2><p class="about-kicker">Executive Assistant | Administrative Support Specialist</p></div><div class="about-copy"><p class="lead">I bring structure, organization, and follow-through to busy work environments.</p><p>My experience has involved coordinating people, schedules, information, logistics, documentation, and multiple activities at the same time.</p><p>Whether coordinating a program, managing an event, maintaining records, communicating with stakeholders, or keeping a shared calendar updated, I focus on making sure details are handled and tasks move forward.</p><p>My experience across program coordination and administrative support has strengthened my ability to manage competing priorities, communicate clearly, maintain accurate records, and support teams effectively.</p><div class="strengths"><span class="edit-label">Professional strengths</span><div class="strength-tags"><span>Organization</span><span>Attention to Detail</span><span>Communication</span><span>Coordination</span><span>Follow-through</span><span>Problem Solving</span><span>Adaptability</span><span>Time Management</span><span>Confidentiality</span><span>Reliability</span></div></div></div>`;
	}

	const about = document.querySelector('#about');
	if (about) about.insertAdjacentHTML('afterend', `<section class="section-pad section-ink capabilities-section"><div class="container"><div class="section-heading light-heading"><p class="eyebrow">What I Bring</p><h2>Capabilities grounded<br>in <em>practice.</em></h2></div><div class="capability-grid"><article><span>01</span><h3>Organization</h3><p>Keeping schedules, information, documents, and activities structured and easy to track.</p></article><article><span>02</span><h3>Coordination</h3><p>Connecting people, activities, logistics, and follow-up to keep work moving.</p></article><article><span>03</span><h3>Communication</h3><p>Supporting professional communication with teams, schools, partners, parents, and other stakeholders.</p></article><article><span>04</span><h3>Attention to Detail</h3><p>Maintaining accurate records, documentation, inventory information, and financial records.</p></article><article><span>05</span><h3>Follow-through</h3><p>Tracking tasks from planning through implementation, documentation, and completion.</p></article><article><span>06</span><h3>Process Improvement</h3><p>Supporting practical improvements such as moving manual processes to digital record keeping.</p></article></div></div></section>`);

	const expertiseSection = document.querySelector('#expertise');
	if (expertiseSection) {
		expertiseSection.querySelector('.container').innerHTML = `<div class="section-heading light-heading"><p class="eyebrow">02 / Expertise</p><h2>Built for the details<br>that <em>move work forward.</em></h2></div><div class="expertise-grid"><article class="expertise-item"><span class="item-number">01</span><h3>Executive &amp;<br>Administrative Support</h3><ul><li>Calendar &amp; Schedule Coordination</li><li>Email &amp; Communication Support</li><li>Administrative Coordination</li><li>Data Entry &amp; Record Management</li><li>Document Management</li><li>Meeting &amp; Event Coordination</li><li>Follow-up &amp; Task Tracking</li><li>Office Phone &amp; Call Management</li><li>Calendar Management</li><li>Event &amp; Logistics Scheduling</li></ul></article><article class="expertise-item"><span class="item-number">02</span><h3>Program &amp;<br>Operations Coordination</h3><ul><li>Program Planning</li><li>Activity Coordination</li><li>Stakeholder Coordination</li><li>Procurement Coordination</li><li>Budget Support</li><li>Logistics</li><li>Documentation</li><li>Reporting</li><li>Monitoring &amp; Follow-up</li></ul></article><article class="expertise-item"><span class="item-number">03</span><h3>Communication &amp;<br>Stakeholder Support</h3><ul><li>Professional Email Communication</li><li>School &amp; Partner Communication</li><li>Community Engagement</li><li>Parent Communication</li><li>Stakeholder Follow-up</li><li>Written Communication</li><li>Report Writing</li></ul></article><article class="expertise-item"><span class="item-number">04</span><h3>Digital &amp;<br>Productivity Tools</h3><ul><li>Google Workspace</li><li>Microsoft Office / Microsoft 365</li><li>Canva</li><li>Trello</li><li>Slack</li><li>Zoom</li><li>Calendly</li><li>Adobe Creative Cloud</li><li>ChatGPT, Microsoft Copilot &amp; Google Gemini</li><li>Online Research</li><li>Data Entry</li><li>Digital Record Keeping</li><li>Basic Digital Content Creation</li></ul></article></div>`;
	}

	const projectsSection = document.querySelector('#projects');
	if (projectsSection) {
		projectsSection.querySelector('.section-intro').innerHTML = `<div class="section-heading"><p class="eyebrow">03 / Featured work</p><h2>Selected<br><em>Work</em></h2></div><div><p>A selection of programs, events, and operational projects I have coordinated or supported.</p><p class="section-support">Explore the projects to see the responsibilities I managed, the processes I supported, and the outcomes achieved.</p></div>`;
	}

	if (projectsSection) {
		projectsSection.querySelectorAll('.project-card').forEach((card, index) => {
			const sequenceLabel = card.querySelector('.project-meta span');
			if (sequenceLabel) sequenceLabel.textContent = sequenceLabel.textContent.replace(/^\d+/, String(index + 1));
		});
	}

	// Running to Read: keep this case study focused on support, coordination, and operations.
	const runningDetails = document.querySelector('#running-to-read-details');
	if (runningDetails) {
		runningDetails.querySelector('.detail-heading h2').innerHTML = 'Running to<br><em>Read</em>';
		const overview = runningDetails.querySelector('.detail-grid > div:first-child p');
		if (overview) overview.textContent = 'Running to Read is an annual community fundraising initiative that combines running, literacy, community participation, and resource mobilization to support children’s reading and learning.';
		const eventInformation = Array.from(runningDetails.querySelectorAll('.detail-block')).find((block) => block.querySelector('h3')?.textContent.trim() === 'Event Information');
		if (eventInformation) eventInformation.remove();
		const responsibilities = Array.from(runningDetails.querySelectorAll('.detail-block')).find((block) => block.querySelector('h3')?.textContent.trim() === 'What I Led');
		if (responsibilities) responsibilities.innerHTML = '<h3>Roles &amp; Responsibilities</h3><div class="experience-group"><h4>Fundraising &amp; Sponsorship Support</h4><ul class="detail-list"><li>Support fundraising activities for the initiative.</li><li>Prepare and coordinate sponsorship requests and follow-up communication.</li><li>Engage potential sponsors and partners to support event activities and resource needs.</li><li>Assist with mobilizing resources and in-kind support.</li></ul></div><div class="experience-group"><h4>Event Planning &amp; Operations</h4><ul class="detail-list"><li>Support planning and coordination of event logistics and operational requirements.</li><li>Coordinate materials, supplies, participant information, and event-related activities.</li><li>Support communication with participating schools, partners, sponsors, and other stakeholders.</li></ul></div><div class="experience-group"><h4>Stakeholder Engagement</h4><ul class="detail-list"><li>Liaise with schools, community stakeholders, sponsors, and partners.</li><li>Support relationship management and timely follow-up before and during event activities.</li></ul></div><div class="experience-group"><h4>Administrative Support &amp; Documentation</h4><ul class="detail-list"><li>Maintain event records and participant information.</li><li>Prepare correspondence, sponsorship documents, and other administrative materials.</li><li>Document activities and support reporting and post-event follow-up.</li></ul></div>';
		const skills = Array.from(runningDetails.querySelectorAll('.detail-block')).find((block) => block.querySelector('h3')?.textContent.trim() === 'Skills Demonstrated');
		if (skills) skills.querySelector('.skill-tags').innerHTML = '<span>Fundraising &amp; Sponsorship Support</span><span>Event &amp; Logistics Coordination</span><span>Stakeholder Engagement</span><span>Administrative &amp; Operations Support</span><span>Documentation &amp; Reporting</span><span>Communication</span><span>Community Engagement</span><span>Resource Mobilization</span>';
	}

	const runningAdminHeading = runningDetails && Array.from(runningDetails.querySelectorAll('.experience-group h4')).find((heading) => heading.textContent.includes('Administrative Support'));
	if (runningAdminHeading) runningAdminHeading.textContent = 'Administrative & Operations Support';

	const experience = document.querySelector('#experience');
	if (experience) experience.insertAdjacentHTML('beforebegin', `<section class="section-pad section-paper preview-section"><div class="container preview-grid"><div><p class="eyebrow">Experience preview</p><h2>Experience That<br><em>Supports My Work</em></h2></div><div><p>My background combines administrative support, program coordination, event management, stakeholder communication, documentation, logistics, and digital record keeping.</p><a class="arrow-link" href="#experience">View My Experience &#8599;</a></div></div></section>`);

	const certifications = document.querySelector('#certifications');
	if (certifications) certifications.insertAdjacentHTML('beforebegin', `<section class="section-pad section-sand preview-section"><div class="container preview-grid"><div><p class="eyebrow">Professional development</p><h2>Certified &amp;<br><em>Continuously Learning</em></h2></div><div><p>My professional development includes Executive Assistant and Virtual Assistant training, business management education, and ongoing development in digital and AI-enabled tools.</p><a class="button button-primary" href="#certifications">View Certifications</a></div></div></section>`);

	if (contactForm) {
		contactForm.addEventListener('submit', async (event) => {
			event.preventDefault();

			const status = contactForm.querySelector('.form-status');
			const button = contactForm.querySelector('button[type="submit"]');

			if (status) {
				status.textContent = 'Sending...';
				status.setAttribute('aria-busy', 'true');
			}

			if (button) {
				button.disabled = true;
				button.textContent = 'Sending...';
			}

			try {
				const response = await fetch(contactForm.action, {
					method: 'POST',
					body: new FormData(contactForm),
					headers: {
						Accept: 'application/json'
					}
				});

				if (response.ok) {
					contactForm.reset();

					if (status) {
						status.textContent = 'Message sent successfully. Thank you for reaching out!';
						status.removeAttribute('aria-busy');
					}
				} else {
					throw new Error('Form submission failed.');
				}
			} catch (error) {
				if (status) {
					status.textContent = 'Sorry, there was a problem sending your message. Please try again or email tprimma@gmail.com directly.';
					status.removeAttribute('aria-busy');
				}
			} finally {
				if (button) {
					button.disabled = false;
					button.textContent = 'Send Message';
				}
			}
		});
	}

	const contact = document.querySelector('#contact');
	if (contact) contact.insertAdjacentHTML('beforebegin', `<section class="section-pad section-ink closing-cta"><div class="container closing-grid"><div class="section-heading light-heading"><p class="eyebrow">A clear next step</p><h2>Let’s <em>Connect</em></h2></div><div><p>For administrative, executive support, program coordination, and operations-related enquiries, I welcome the opportunity to connect.</p><div class="button-row"><a class="button button-accent" href="mailto:tprimma@gmail.com">Email Me</a><a class="button button-outline light-button" href="https://www.linkedin.com/in/primmakioko" target="_blank" rel="noopener">LinkedIn</a></div><p class="closing-details">+254 702 524 307 &nbsp; / &nbsp; Kenya</p></div></div></section>`);

	const experienceSection = document.querySelector('#experience');
	if (experienceSection) {
		experienceSection.querySelector('.two-column').innerHTML = `<div class="section-heading"><p class="eyebrow">04 / Experience</p><h2>Experience that<br><em>keeps things moving.</em></h2></div><div class="experience-list"><article class="experience-card"><span class="edit-label">Current role / January 2025 – Present</span><h3>Program Assistant / Program Coordinator / Program Officer</h3><p class="experience-org">Kenya Connect – Wamunyu</p><ul class="detail-list"><li>Lead and coordinate program activities.</li><li>Coordinate stakeholders involved in program implementation.</li><li>Support budgeting and procurement.</li><li>Coordinate school engagement and communication.</li><li>Plan training and distribution activities.</li><li>Maintain program records and documentation.</li><li>Collect and organize photographs and videos.</li><li>Prepare program reports.</li><li>Support monitoring and follow-up activities.</li><li>Coordinate events and community activities.</li><li>Track program information and progress.</li><li>Communicate with schools, parents, partners, and other stakeholders.</li><li>Manage the organization’s office phone, responding to calls, handling inquiries, taking messages, and directing communication to the appropriate person or team as needed.</li><li>Manage and update the organization’s shared Google Calendar with events, meetings, activities, and logistics information to keep the team informed and coordinated.</li></ul><div class="experience-links"><a class="arrow-link" href="#wingspoa-details">Explore WingsPoa &#8599;</a><a class="arrow-link" href="#projects">Explore other programs &#8599;</a></div></article><article class="experience-card"><span class="edit-label">Previous Program Experience</span><h3>Literacy &amp; Digital Learning Programs</h3><p>Supported manual-to-online book records, library book inventory and tracking, mobile library support, school book distribution, supplies receiving and inventory, and digital learning through introductory Scratch coding.</p><a class="arrow-link" href="#literacy-details">Explore Literacy program &#8599;</a></article></div>`;
	}

	if (experienceSection) {
		experienceSection.querySelector('.two-column').innerHTML = `<div class="section-heading"><p class="eyebrow">04 / Experience</p><h2>Experience that<br><em>keeps things moving.</em></h2></div><div class="experience-list"><article class="experience-card"><span class="edit-label">Current role / January 2025 – Present</span><h3>Program Coordinator | Administrative &amp; Operations Support</h3><p class="experience-org">Kenya Connect – Wamunyu</p><p>Supports program delivery while managing administrative and operational responsibilities across scheduling, communication, logistics, documentation, reporting, calendar coordination, inventory tracking, and stakeholder coordination.</p><div class="experience-group"><h4>Administrative &amp; Operations Support</h4><ul class="detail-list"><li>Manage the organization’s office phone and support incoming communication.</li><li>Manage and update the organization’s shared Google Calendar.</li><li>Add and maintain events, program activities, meetings, schedules, and logistics on the shared calendar.</li><li>Coordinate day-to-day administrative and operational activities.</li><li>Maintain organized documentation and operational records.</li><li>Prepare and organize reports and program documentation.</li><li>Collect, organize, and maintain program data and records.</li><li>Coordinate stakeholder communication and follow-up.</li></ul></div><div class="experience-group"><h4>Event &amp; Logistics Coordination</h4><ul class="detail-list"><li>Support planning and coordination of events and program activities.</li><li>Coordinate logistics, schedules, communication, materials, and participant arrangements.</li><li>Support follow-up and coordination across different activities and stakeholders.</li></ul></div><div class="experience-group"><h4>Inventory &amp; Record Management</h4><div class="inventory-split"><div><h5>Library Book Inventory &amp; Tracking</h5><p>Track and maintain records of library books. Support inventory organization and accountability for books.</p></div><div><h5>Supplies Receiving &amp; Inventory</h5><p>Receive and track supplies delivered to the organization. Maintain organized records of supplies and inventory.</p></div></div></div><div class="experience-group"><h4>Program Coordination &amp; Facilitation</h4><ul class="detail-list"><li>Lead and coordinate program activities.</li><li>Coordinate stakeholders involved in program implementation.</li><li>Support budgeting and procurement.</li><li>Coordinate school engagement and communication.</li><li>Plan training and distribution activities.</li><li>Coordinate events and community activities.</li><li>Track program information and progress.</li></ul></div><div class="experience-group"><h4>Peep Antenatal Program</h4><p>Second year facilitating group sessions for expectant parents and families in partnership with Wamunyu Level 3 Hospital. More than 20 families have participated.</p><ul class="detail-list"><li>Work from an established curriculum and prepare activities based on the topic being covered.</li><li>Facilitate group sessions for expectant parents.</li><li>Document sessions and program activities.</li><li>Prepare reports.</li><li>Support parent engagement and awareness around connecting with unborn babies.</li></ul></div><div class="experience-links"><a class="arrow-link" href="#wingspoa-details">Explore WingsPoa &#8599;</a><a class="arrow-link" href="#peep-antenatal-details">Explore Peep Antenatal &#8599;</a></div></article><article class="experience-card"><span class="edit-label">Previous Program Experience</span><h3>Literacy, Mobile Library &amp; Digital Learning</h3><p>Previous experience supporting manual-to-online book records, library book inventory and tracking, mobile library support, school book distribution, supplies receiving and inventory, and introductory Scratch coding.</p><a class="arrow-link" href="#literacy-details">Explore Literacy program &#8599;</a></article></div>`;
	}

	const certificationsSection = document.querySelector('#certifications');
	if (certificationsSection) {
		certificationsSection.querySelector('.container').innerHTML = `<div class="section-intro"><div class="section-heading"><p class="eyebrow">05 / Credentials</p><h2>Certifications &amp; <em>Education</em></h2></div><p>Professional certifications and education supporting my administrative, executive support, digital, and business management experience.</p></div><!-- CERTIFICATES: ADD OR REPLACE FILE REFERENCES HERE --><div class="certificate-grid"><article class="certificate-card"><div class="certificate-icon">+</div><div><span class="edit-label">CERTIFIED</span><h3>Certified Executive Assistant</h3><p>Executive Assistant certification</p><span class="certificate-placeholder">Certificate file coming soon</span></div></article><article class="certificate-card"><div class="certificate-icon">+</div><div><span class="edit-label">COMPLETED</span><h3>Virtual Assistant Certification</h3><p>Mediacrest Training College<br>2026</p><span class="certificate-placeholder">Certificate file coming soon</span></div></article><article class="certificate-card"><div class="certificate-icon">+</div><div><span class="edit-label">COMPLETED</span><h3>Executive Assistant Skills</h3><p>Alison</p><span class="certificate-placeholder">Certificate file coming soon</span></div></article><article class="certificate-card"><div class="certificate-icon">+</div><div><span class="edit-label">COMPLETED / JULY 30, 2026</span><h3>AI Champions Recognition Program</h3><p>ICT Authority Kenya</p><span class="certificate-placeholder">Certificate file coming soon</span></div></article><article class="certificate-card"><div class="certificate-icon">+</div><div><span class="edit-label">CURRENTLY ENROLLED</span><h3>ALX Virtual Assistant Program</h3><p>Present / enrolled</p><span class="certificate-placeholder">Certificate file coming soon</span></div></article></div><div class="education-heading"><p class="eyebrow">Education</p><h3>Education</h3></div><div class="certificate-grid education-grid"><article class="certificate-card"><div class="certificate-icon">+</div><div><span class="edit-label">EDUCATION</span><h3>Diploma in Business Management</h3><p>Machakos Institute of Technology</p><span class="certificate-placeholder">Certificate file coming soon</span></div></article></div>`;
		const certificateGrid = certificationsSection.querySelector('.certificate-grid');
		const certificateCard = (title, institution, details, file) => `<article class="certificate-card"><div class="certificate-icon">+</div><div><span class="edit-label">COMPLETED</span><h3>${title}</h3><p>${institution}<br>${details}</p><a class="button button-outline certificate-link" href="${file}" target="_blank" rel="noopener noreferrer">View Certificate</a></div></article>`;
		// CERTIFICATES: ADD OR REPLACE FILE REFERENCES HERE.
		certificateGrid.innerHTML = `${certificateCard('Virtual Assistant Program', 'Mediacrest Training College', '2026<br>Certificate of Achievement', 'assets/certificates/Mediacrest -certificate.pdf')}${certificateCard('Artificial Intelligence Training', 'ICT Authority, Kenya<br>In collaboration with Pathways Technologies', 'July 30, 2026<br>Certificate ID: ICTA-1785403352-7426-44894', 'assets/certificates/Artificial-Intelligence-training.pdf')}${certificateCard('AI Skills Badge 2025–26', 'Microsoft Elevate', 'Issue date: April 15, 2026', 'assets/certificates/AI-Skills-badge.pdf')}${certificateCard('GitHub Copilot Certificate', 'GitHub', 'Certificate details as shown on uploaded certificate', 'assets/certificates/Github-Copilot.pdf')}`;
		certificationsSection.querySelectorAll('.certificate-link').forEach((link) => {
			fetch(link.getAttribute('href'), { method: 'HEAD' }).then((response) => {
				if (response.ok) return;
				const placeholder = document.createElement('span');
				placeholder.className = 'certificate-placeholder';
				placeholder.textContent = 'Certificate file coming soon';
				link.replaceWith(placeholder);
			}).catch(() => {
				const placeholder = document.createElement('span');
				placeholder.className = 'certificate-placeholder';
				placeholder.textContent = 'Certificate file coming soon';
				link.replaceWith(placeholder);
			});
		});
	}

	document.querySelectorAll('.project-detail .detail-block').forEach((block) => {
		const heading = block.querySelector('h3')?.textContent.trim();
		if (heading === 'Impact' || heading === 'Impact / Results' || heading === 'Project Gallery') block.remove();
	});

	const peepDetails = document.querySelector('#peep-antenatal-details');
	if (peepDetails) {
		peepDetails.querySelectorAll('*').forEach((element) => {
			if (element.childElementCount === 0 && element.textContent.includes('group sessions')) element.textContent = element.textContent.replaceAll('group sessions', 'sessions').replaceAll('Group sessions', 'Sessions');
		});
		const partnership = Array.from(peepDetails.querySelectorAll('.detail-block')).find((block) => block.querySelector('h3')?.textContent.trim() === 'Partnership');
		if (partnership) {
			partnership.querySelector('p').textContent = 'The program is implemented through coordination and partnership with Peeple Organization, UK, supporting the planning and delivery for expectant parents.';
			const partnerTags = partnership.querySelector('.skill-tags');
			if (partnerTags) partnerTags.innerHTML = '<span>Peeple Organization, UK</span><span>Health Center</span>';
		}
		const snapshotPartner = Array.from(peepDetails.querySelectorAll('.results-grid span')).find((span) => span.textContent.includes('Key partner:'));
		if (snapshotPartner) snapshotPartner.textContent = 'Key partner: Peeple Organization, UK';
		const groupResult = Array.from(peepDetails.querySelectorAll('.results-grid > div')).find((result) => result.querySelector('strong')?.textContent.trim() === 'GROUP SESSIONS');
		if (groupResult) groupResult.remove();
	}

	const eyePartnerBlock = Array.from(document.querySelectorAll('#eye-screening-details .detail-block')).find((block) => block.querySelector('h3')?.textContent.trim() === 'Partners');
	const eyePartners = eyePartnerBlock?.querySelector('.skill-tags');
	if (eyePartners) {
		const vision30 = Array.from(eyePartners.querySelectorAll('span')).find((partner) => partner.textContent.trim() === 'Vision 30');
		if (vision30) vision30.textContent = 'Global Vision 2020';
	}

	document.querySelectorAll('.image-frame img').forEach((image) => {
		image.addEventListener('load', () => image.classList.add('is-loaded'));
		const imageFrame = image.parentElement;
		const handleMissingImage = () => { image.remove(); if (imageFrame.matches('.gallery-item')) imageFrame.disabled = true; };
		image.addEventListener('error', handleMissingImage);
		if (image.complete) {
			if (image.naturalWidth === 0) handleMissingImage();
			else image.classList.add('is-loaded');
		}
	});


		document.querySelectorAll('.gallery-grid').forEach((grid) => {
		const seenPaths = new Set();
		grid.querySelectorAll('.gallery-item').forEach((item) => {
			if (seenPaths.has(item.dataset.lightbox)) item.remove();
			seenPaths.add(item.dataset.lightbox);
		});
	});

	const lightbox = document.querySelector('#lightbox');
	const lightboxImage = document.querySelector('#lightbox-image');
	const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
	let activeImage = 0;
	if (lightbox && lightboxImage && galleryItems.length) {
		const availableImages = () => galleryItems.filter((item) => !item.disabled);
		const showImage = (index) => { const images = availableImages(); if (!images.length) return; activeImage = (index + images.length) % images.length; const item = images[activeImage]; lightboxImage.src = item.dataset.lightbox; lightboxImage.alt = item.dataset.alt; };
		const closeLightbox = () => { lightbox.classList.remove('is-visible'); lightbox.setAttribute('aria-hidden', 'true'); lightboxImage.removeAttribute('src'); };
		galleryItems.forEach((item) => item.addEventListener('click', () => { if (!item.disabled) { showImage(availableImages().indexOf(item)); lightbox.classList.add('is-visible'); lightbox.setAttribute('aria-hidden', 'false'); lightbox.querySelector('.lightbox-close').focus(); } }));
		lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
		lightbox.querySelector('.lightbox-prev').addEventListener('click', () => showImage(activeImage - 1));
		lightbox.querySelector('.lightbox-next').addEventListener('click', () => showImage(activeImage + 1));
		lightbox.addEventListener('click', (event) => { if (event.target === lightbox) closeLightbox(); });
		document.addEventListener('keydown', (event) => { if (!lightbox.classList.contains('is-visible')) return; if (event.key === 'Escape') closeLightbox(); if (event.key === 'ArrowLeft') showImage(activeImage - 1); if (event.key === 'ArrowRight') showImage(activeImage + 1); });
	}
});
