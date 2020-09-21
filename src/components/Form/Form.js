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
      this.catchDOM(this.settings, this.afterInit.bind(this));
      this.createDatePicker();
    }
  },
  afterInit() {
    this.bindEvents();
  },
  catchDOM(settings, callback) {
    const target = $(settings.target);
    this.$target = {
      root: target,
      form: target.find(settings.form),
      input: target.find(settings.input),
    };
    callback();
  },
  bindEvents() {
    $(this.$target.input).on("click", this.displayCalendar.bind(this));
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
      }
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
  displayCalendar(event) {
    event.preventDefault();
    const input = $(event.currentTarget);
    const calender = input[0].nextElementSibling;
    if( $(calender).hasClass('qs-hidden')) {
      $(calender).removeClass('qs-hidden');
    }
    else {
      $(calender).addClass('qs-hidden');
    }
  },
};
export default Form;