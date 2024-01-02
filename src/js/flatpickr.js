/* eslint-disable */
import flatpickr from 'flatpickr';
import 'flatpickr/dist/l10n/bn.js';

/* -------------------------------------------------------------------------- */
/*                                    Utils                                   */
/* -------------------------------------------------------------------------- */

const camelize = str => {
  const text = str.replace(/[-_\s.]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));
  return `${text.substr(0, 1).toLowerCase()}${text.substr(1)}`;
};

const getData = (el, data) => {
  try {
    return JSON.parse(el.dataset[camelize(data)]);
  } catch (e) {
    return el.dataset[camelize(data)];
  }
};

/* -------------------------------------------------------------------------- */
/*                                  Flatpickr                                 */
/* -------------------------------------------------------------------------- */

const defaultPredefinedRanges = [
  {
    id: 'today',
    label: 'Today',
    range: [new Date(new Date().setHours(0, 0, 0, 0)), new Date()]
  },
  {
    id: 'this_month',
    label: 'This Month',
    range: [
      new Date(new Date().getFullYear(), new Date().getMonth(), 1),
      new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)
    ]
  },
  {
    id: 'last_month',
    label: 'Last Month',
    range: [
      new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1),
      new Date(new Date().getFullYear(), new Date().getMonth(), 0)
    ]
  },
  {
    id: 'last_7_days',
    label: 'Last 7 Days',
    range: [new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000), new Date()]
  },
  {
    id: 'last_30_days',
    label: 'Last 30 Days',
    range: [new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000), new Date()]
  }
];

document.querySelectorAll('.datetimepicker').forEach(item => {
  const options = getData(item, 'options');
  const flatpickrInstance = initializeFlatpickr(item, options);

  function initializeFlatpickr(element, options) {
    const instance = flatpickr(element, {
      ...options,
      onOpen: showPredefinedRanges,
      onClose: hidePredefinedRanges
    });

    function showPredefinedRanges(selectedDates, dateStr, instance) {
      const { calendarContainer } = instance;

      if (options.predefinedRanges) {
        calendarContainer.classList.add('predefinedRange');

        const rangeButtonsHtml = generateRangeButtons(defaultPredefinedRanges, options.predefinedRanges);
        appendRangeButtonsIfNotExists(calendarContainer, rangeButtonsHtml);

        addRangeButtonClickListeners(instance, calendarContainer);
      }
    }

    function hidePredefinedRanges(selectedDates, dateStr, instance) {
      if (options.predefinedRanges) {
        const { calendarContainer } = instance;
        calendarContainer.classList.remove('predefinedRange');
      }
    }

    return instance;
  }

  function applyUserRange(defaultRange, userRange) {
    const matchingDefault = defaultRange.find(item => item.id === Object.keys(userRange)[0]);
    return matchingDefault ? { ...matchingDefault, label: userRange[Object.keys(userRange)[0]] } : userRange;
  }

  function findDefaultRange(defaultRange, userRange) {
    return defaultRange.find(item => item.id === userRange) || null;
  }

  function generateRangeButtons(defaultPredefinedRanges, userDefinedRanges = []) {
    const normalizedUserRanges = Array.isArray(userDefinedRanges) ? userDefinedRanges : defaultPredefinedRanges;

    const mergedRanges = normalizedUserRanges
      .map(userRange =>
        typeof userRange === 'object'
          ? applyUserRange(defaultPredefinedRanges, userRange)
          : findDefaultRange(defaultPredefinedRanges, userRange)
      )
      .filter(Boolean);

    return `
      <ul class="flatpickr-predefined-ranges list-group list-group-flush">
        ${mergedRanges
          .map(
            ({ range, label }) => `
            <button type="button" 
              data-range="${range.map(date => (date instanceof Date ? date.toISOString() : date)).join(',')}" 
              class="nav-link list-group-item list-group-item-action">
              ${label}
            </button>`
          )
          .join('')}
      </ul>
    `;
  }

  function appendRangeButtonsIfNotExists(calendarContainer, rangeButtonsHtml) {
    if (!calendarContainer.querySelector('.flatpickr-predefined-ranges')) {
      calendarContainer.insertAdjacentHTML('afterbegin', rangeButtonsHtml);
    }
  }

  function addRangeButtonClickListeners(instance, calendarContainer) {
    [...calendarContainer.querySelectorAll('[data-range]')].map(btn =>
      btn.addEventListener('click', e => {
        const startDate = new Date(getData(btn, 'range').split(',')[0]);
        const endDate = new Date(getData(btn, 'range').split(',')[1]);
        instance.setDate([startDate, endDate], true);
        instance.redraw();
      })
    );
  }
});
