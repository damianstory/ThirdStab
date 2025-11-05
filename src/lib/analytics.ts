import ReactGA from 'react-ga4';

/**
 * Track a generic custom event
 * @param category - Event category (e.g., "User Interaction", "Navigation")
 * @param action - Event action (e.g., "click", "submit")
 * @param label - Optional event label for additional context
 * @param value - Optional numeric value associated with the event
 */
export function trackEvent(
  category: string,
  action: string,
  label?: string,
  value?: number
) {
  ReactGA.event({
    category,
    action,
    label,
    value,
  });

  console.log('GA4 Event tracked:', {
    category,
    action,
    label,
    value,
  });
}

/**
 * Track button click events
 * @param buttonName - Name or identifier of the button
 * @param location - Where the button is located on the page
 */
export function trackButtonClick(buttonName: string, location: string) {
  ReactGA.event({
    category: 'Button Click',
    action: 'click',
    label: `${buttonName} - ${location}`,
  });

  console.log('GA4 Button Click tracked:', {
    buttonName,
    location,
  });
}

/**
 * Track email signup submissions
 * @param source - Where the signup form is located (e.g., "Footer", "Hero")
 * @param success - Whether the submission was successful
 */
export function trackEmailSignup(source: string, success: boolean) {
  ReactGA.event({
    category: 'Email Signup',
    action: success ? 'success' : 'failure',
    label: source,
  });

  console.log('GA4 Email Signup tracked:', {
    source,
    success,
  });
}

/**
 * Track navigation clicks
 * @param destination - Where the navigation link leads to
 * @param source - Where the navigation element is located
 */
export function trackNavigation(destination: string, source: string) {
  ReactGA.event({
    category: 'Navigation',
    action: 'click',
    label: `${source} -> ${destination}`,
  });

  console.log('GA4 Navigation tracked:', {
    destination,
    source,
  });
}

/**
 * Track FAQ interactions
 * @param question - The FAQ question text or identifier
 * @param action - Action taken (e.g., "expand", "collapse")
 */
export function trackFAQ(question: string, action: 'expand' | 'collapse') {
  ReactGA.event({
    category: 'FAQ',
    action,
    label: question,
  });

  console.log('GA4 FAQ tracked:', {
    question,
    action,
  });
}

/**
 * Track external link clicks
 * @param url - The URL of the external link
 * @param linkText - The text or description of the link
 */
export function trackExternalLink(url: string, linkText: string) {
  ReactGA.event({
    category: 'External Link',
    action: 'click',
    label: `${linkText} - ${url}`,
  });

  console.log('GA4 External Link tracked:', {
    url,
    linkText,
  });
}

/**
 * Track Skills for Success interactions
 * @param skillName - Name of the skill clicked
 * @param month - Activity month
 */
export function trackSkillsForSuccess(
  skillName: string,
  month: string
) {
  ReactGA.event({
    category: 'Skills for Success',
    action: 'skill_click',
    label: `${skillName} - ${month}`,
  });

  console.log('GA4 Skills for Success tracked:', {
    skillName,
    month,
  });
}

/**
 * Track Choose Your Activity selections
 * @param activityName - Name of the activity chosen
 * @param month - Activity month
 */
export function trackActivitySelection(
  activityName: string,
  month: string
) {
  ReactGA.event({
    category: 'Activity Selection',
    action: 'activity_click',
    label: `${activityName} - ${month}`,
  });

  console.log('GA4 Activity Selection tracked:', {
    activityName,
    month,
  });
}

/**
 * Track video engagement for Skills for Success
 * @param skillName - Name of the skill video
 * @param month - Activity month
 */
export function trackSkillVideoEngagement(
  skillName: string,
  month: string
) {
  ReactGA.event({
    category: 'Skills Video',
    action: 'video_open',
    label: `${skillName} - ${month}`,
  });

  console.log('GA4 Skills Video tracked:', {
    skillName,
    month,
  });
}
