import $ from 'jquery';
import datepicker from 'js-datepicker';

const Form = {
  settings: {
    target: '.form',
    form: '.form__form',
    input: '.form__input',
  },
  
  init(args) {
    this.settings = $.extend(true, this.settings, args);
    if ($(this.settings.target).length > 0) {
      this.catchDOM(this.settings);
      this.createDatePicker();
    }
  },
  catchDOM(settings,) {
    const target = $(settings.target);
    this.$target = {
      root: target,
      form: target.find(settings.form),
      input: target.find(settings.input),
    };
  },
  checkForm(event) {
    event.preventDefault();
  },
  createDatePicker() {
    const calenderStart = datepicker(`#since`, {
      id: 1,
      startDay: 1,
      customDays: ["Nie", 'Pon', 'Wto', 'Śro', 'Czw', "Pią", "Sob" ],
      customMonths: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
      overlayButton: "Wybierz",
      overlayPlaceholder: 'Wybierz miesiąc',
      showAllDates: true,
      minDate: new Date(),
      formatter: (input, date, instance) => {
        const value = date.toLocaleDateString()
        input.value = value
      },
      disableYearOverlayButton: false,
    });
    const calenderEnd = datepicker(`#to`, {
      id: 1,
      startDay: 1,
      customDays: ["Nie", 'Pon', 'Wto', 'Śro', 'Czw', "Pią", "Sob" ],
      customMonths: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
      overlayButton: "Wybierz",
      overlayPlaceholder: 'Wybierz miesiąc',
      showAllDates: true,
      formatter: (input, date, instance) => {
        const value = date.toLocaleDateString()
        input.value = value
      }
    });
  },
};
export default Form;