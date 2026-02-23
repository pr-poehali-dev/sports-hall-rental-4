import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/f792ab46-3c70-4b5f-8ab8-373ceba9a920/files/ab5f7663-57bc-4b37-b4b2-7877bfbcb828.jpg";
const SECTION_IMG = "https://cdn.poehali.dev/projects/f792ab46-3c70-4b5f-8ab8-373ceba9a920/files/26983773-aac4-4867-acf9-e76578586a78.jpg";
const GALLERY_IMG3 = "https://cdn.poehali.dev/projects/f792ab46-3c70-4b5f-8ab8-373ceba9a920/files/8dbf627b-5508-43ea-9526-75f50131f15a.jpg";

const schedule = [
  { day: "Пн", slots: ["07:00", "09:00", "11:00", "14:00", "17:00", "19:00", "21:00"] },
  { day: "Вт", slots: ["07:00", "09:00", "11:00", "14:00", "17:00", "19:00", "21:00"] },
  { day: "Ср", slots: ["07:00", "09:00", "11:00", "14:00", "17:00", "19:00", "21:00"] },
  { day: "Чт", slots: ["07:00", "09:00", "11:00", "14:00", "17:00", "19:00", "21:00"] },
  { day: "Пт", slots: ["07:00", "09:00", "11:00", "14:00", "17:00", "19:00", "21:00"] },
  { day: "Сб", slots: ["08:00", "10:00", "12:00", "15:00", "17:00", "19:00"] },
  { day: "Вс", slots: ["08:00", "10:00", "12:00", "15:00", "17:00", "19:00"] },
];

const bookedSlots: Record<string, string[]> = {
  "Пн": ["09:00", "17:00"],
  "Вт": ["11:00", "19:00"],
  "Ср": ["07:00", "14:00"],
  "Пт": ["19:00", "21:00"],
  "Сб": ["10:00", "15:00"],
};

const tariffs = [
  {
    name: "Разовое",
    price: "800",
    unit: "₽/час",
    features: ["Любой день недели", "Зал полностью в аренду", "Раздевалки включены", "Без предоплаты"],
    highlight: false,
  },
  {
    name: "Абонемент 10",
    price: "6 500",
    unit: "₽/месяц",
    features: ["10 часов в месяц", "Перенос неиспользованных часов", "Раздевалки включены", "Скидка 19%"],
    highlight: true,
  },
  {
    name: "Абонемент 20",
    price: "11 000",
    unit: "₽/месяц",
    features: ["20 часов в месяц", "Перенос неиспользованных часов", "Раздевалки включены", "Скидка 31%"],
    highlight: false,
  },
];

const sections = [
  {
    title: "Футбол для детей",
    age: "5–10 лет",
    icon: "⚽",
    desc: "Развиваем координацию, командный дух и любовь к спорту с раннего возраста. Опытные тренеры, безопасная среда.",
    days: "Вт, Чт, Сб",
    time: "10:00 – 11:30",
    price: "3 500 ₽/мес",
  },
  {
    title: "Футбол 11–16 лет",
    age: "11–16 лет",
    icon: "🏃",
    desc: "Профессиональная подготовка с акцентом на технику и тактику. Регулярные товарищеские матчи.",
    days: "Пн, Ср, Пт",
    time: "17:00 – 19:00",
    price: "4 500 ₽/мес",
  },
  {
    title: "Взрослый футбол",
    age: "17+ лет",
    icon: "🥅",
    desc: "Для тех, кто хочет играть в удовольствие и поддерживать форму. Игры по средам и пятницам.",
    days: "Ср, Пт",
    time: "19:00 – 21:00",
    price: "5 000 ₽/мес",
  },
];

const galleryImages = [
  HERO_IMG,
  SECTION_IMG,
  GALLERY_IMG3,
  HERO_IMG,
  SECTION_IMG,
  GALLERY_IMG3,
];

const navLinks = [
  { label: "Расписание", href: "#schedule" },
  { label: "Тарифы", href: "#tariffs" },
  { label: "Секции", href: "#sections" },
  { label: "Галерея", href: "#gallery" },
  { label: "Контакты", href: "#contacts" },
];

export default function Index() {
  const [selectedDay, setSelectedDay] = useState("Пн");
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [bookingForm, setBookingForm] = useState({ name: "", phone: "" });
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ name: "", phone: "", message: "" });
  const [contactSent, setContactSent] = useState(false);

  const daySchedule = schedule.find((s) => s.day === selectedDay);
  const bookedForDay = bookedSlots[selectedDay] || [];

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlot || !bookingForm.name || !bookingForm.phone) return;
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setSelectedSlot(null);
      setBookingForm({ name: "", phone: "" });
    }, 3000);
  };

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSent(true);
    setContactForm({ name: "", phone: "", message: "" });
    setTimeout(() => setContactSent(false), 3000);
  };

  return (
    <div className="bg-white font-golos">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-sport-dark/95 backdrop-blur-sm border-b border-sport-green/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center gap-2">
              <span className="text-sport-green text-2xl font-oswald font-bold tracking-wider">СПОРТ<span className="text-white">АРЕНА</span></span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-gray-300 hover:text-sport-green transition-colors text-sm font-medium tracking-wide">
                  {link.label}
                </a>
              ))}
            </div>
            <a href="#schedule" className="hidden md:inline-flex items-center gap-2 bg-sport-green hover:bg-sport-green-light text-white px-5 py-2 rounded-lg font-medium text-sm transition-all hover:shadow-lg hover:shadow-green-500/30">
              Забронировать
            </a>
            <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-sport-dark border-t border-sport-green/20 px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-300 hover:text-sport-green py-1 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="#schedule" className="bg-sport-green text-white text-center px-4 py-2 rounded-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
              Забронировать
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Спортзал" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-sport-dark via-sport-dark/80 to-transparent" />
          <div className="absolute inset-0 bg-sport-dark/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
          <div className="max-w-2xl animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-sport-green/20 border border-sport-green/40 text-sport-green px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-sport-green rounded-full animate-pulse inline-block"></span>
              Открыто сегодня · 07:00 – 23:00
            </div>
            <h1 className="font-oswald text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              ТВОЙ ЗАЛ —
              <br />
              <span className="text-sport-green">ТВОЁ ВРЕМЯ</span>
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl mb-10 leading-relaxed">
              Профессиональный спортивный зал с искусственным газоном. Аренда по часам и секции по футболу для детей и взрослых.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#schedule" className="inline-flex items-center justify-center gap-2 bg-sport-green hover:bg-sport-green-light text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all green-glow hover:green-glow">
                <Icon name="CalendarCheck" size={22} />
                Забронировать зал
              </a>
              <a href="#sections" className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-sport-green text-white hover:text-sport-green px-8 py-4 rounded-xl font-semibold text-lg transition-all">
                <Icon name="Users" size={22} />
                Секции
              </a>
            </div>
          </div>
          <div className="absolute bottom-8 right-4 sm:right-8 hidden lg:flex flex-col gap-4">
            {[
              { value: "500+", label: "клиентов" },
              { value: "5 лет", label: "работаем" },
              { value: "24/7", label: "поддержка" },
            ].map((stat) => (
              <div key={stat.label} className="text-right">
                <div className="text-sport-green font-oswald text-3xl font-bold">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 animate-bounce">
          <span className="text-xs tracking-widest uppercase">Листай вниз</span>
          <Icon name="ChevronDown" size={20} />
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-sport-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "Zap", title: "Онлайн-бронирование", desc: "Забронируй в пару кликов" },
              { icon: "MapPin", title: "Удобное расположение", desc: "Центр города, парковка" },
              { icon: "Shield", title: "Профессиональное покрытие", desc: "Искусственный газон FIFA" },
              { icon: "Award", title: "Сертифицированные тренеры", desc: "Тренеры с лицензиями UEFA" },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center p-6 rounded-2xl bg-sport-gray border border-sport-green/10 hover:border-sport-green/40 transition-all card-hover">
                <div className="w-12 h-12 rounded-xl bg-sport-green/20 flex items-center justify-center mb-4">
                  <Icon name={item.icon} size={24} className="text-sport-green" />
                </div>
                <h3 className="font-oswald text-white font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHEDULE + BOOKING */}
      <section id="schedule" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sport-green font-medium text-sm uppercase tracking-widest">Онлайн-бронирование</span>
            <h2 className="font-oswald text-4xl sm:text-5xl font-bold text-sport-dark mt-2">Расписание и бронь</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">Выберите день и удобное время, оставьте контакты — мы подтвердим бронь в течение 5 минут</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Schedule */}
            <div>
              {/* Day tabs */}
              <div className="flex gap-2 mb-6 flex-wrap">
                {schedule.map((s) => (
                  <button
                    key={s.day}
                    onClick={() => { setSelectedDay(s.day); setSelectedSlot(null); }}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${selectedDay === s.day ? "bg-sport-dark text-sport-green border border-sport-green" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                  >
                    {s.day}
                  </button>
                ))}
              </div>

              {/* Time slots */}
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {daySchedule?.slots.map((slot) => {
                  const isBooked = bookedForDay.includes(slot);
                  const isSelected = selectedSlot === slot;
                  return (
                    <button
                      key={slot}
                      disabled={isBooked}
                      onClick={() => setSelectedSlot(isSelected ? null : slot)}
                      className={`py-3 rounded-xl text-sm font-medium transition-all border-2 ${
                        isBooked
                          ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed line-through"
                          : isSelected
                          ? "bg-sport-green text-white border-sport-green green-glow-sm"
                          : "bg-white border-gray-200 text-gray-700 hover:border-sport-green hover:text-sport-green"
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-4 mt-4 text-xs text-gray-500">
                <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-sport-green inline-block"></span>Выбрано</span>
                <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-gray-200 inline-block"></span>Занято</span>
                <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded border-2 border-gray-300 inline-block"></span>Свободно</span>
              </div>
            </div>

            {/* Booking form */}
            <div className="bg-sport-dark rounded-2xl p-8 border border-sport-green/20">
              <h3 className="font-oswald text-white text-2xl font-bold mb-2">Оформить бронь</h3>
              {selectedSlot ? (
                <div className="inline-flex items-center gap-2 bg-sport-green/20 border border-sport-green/40 text-sport-green px-3 py-1 rounded-full text-sm mb-6">
                  <Icon name="Clock" size={14} />
                  {selectedDay}, {selectedSlot} – 1 час
                </div>
              ) : (
                <p className="text-gray-500 text-sm mb-6">← Выберите время из расписания</p>
              )}

              {bookingSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-sport-green/20 flex items-center justify-center mx-auto mb-4">
                    <Icon name="CheckCircle" size={32} className="text-sport-green" />
                  </div>
                  <h4 className="font-oswald text-white text-xl font-bold mb-2">Заявка отправлена!</h4>
                  <p className="text-gray-400 text-sm">Мы свяжемся с вами в течение 5 минут</p>
                </div>
              ) : (
                <form onSubmit={handleBook} className="space-y-4">
                  <div>
                    <label className="text-gray-400 text-sm mb-1.5 block">Ваше имя</label>
                    <input
                      type="text"
                      placeholder="Иван Петров"
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                      className="w-full bg-sport-gray border border-sport-green/20 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-sport-green transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm mb-1.5 block">Телефон</label>
                    <input
                      type="tel"
                      placeholder="+7 (999) 000-00-00"
                      value={bookingForm.phone}
                      onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                      className="w-full bg-sport-gray border border-sport-green/20 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-sport-green transition-colors"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={!selectedSlot}
                    className="w-full bg-sport-green hover:bg-sport-green-light disabled:bg-gray-700 disabled:cursor-not-allowed text-white py-3.5 rounded-xl font-semibold transition-all"
                  >
                    {selectedSlot ? "Отправить заявку" : "Выберите время"}
                  </button>
                  <p className="text-gray-600 text-xs text-center">Нажимая кнопку, вы соглашаетесь на обработку персональных данных</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* TARIFFS */}
      <section id="tariffs" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sport-green font-medium text-sm uppercase tracking-widest">Прозрачные цены</span>
            <h2 className="font-oswald text-4xl sm:text-5xl font-bold text-sport-dark mt-2">Тарифы</h2>
            <p className="text-gray-500 mt-4">Без скрытых платежей. Раздевалки и душевые — в стоимости</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {tariffs.map((t) => (
              <div
                key={t.name}
                className={`relative rounded-2xl p-8 card-hover ${
                  t.highlight
                    ? "bg-sport-dark border-2 border-sport-green green-glow"
                    : "bg-white border border-gray-200"
                }`}
              >
                {t.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-sport-green text-white text-xs px-4 py-1.5 rounded-full font-semibold whitespace-nowrap">
                    Популярный выбор
                  </div>
                )}
                <h3 className={`font-oswald text-2xl font-bold mb-1 ${t.highlight ? "text-white" : "text-sport-dark"}`}>{t.name}</h3>
                <div className="flex items-end gap-1 mb-6">
                  <span className={`font-oswald text-4xl font-bold ${t.highlight ? "text-sport-green" : "text-sport-dark"}`}>{t.price}</span>
                  <span className={`text-sm pb-1 ${t.highlight ? "text-gray-400" : "text-gray-500"}`}>{t.unit}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <Icon name="Check" size={16} className="text-sport-green flex-shrink-0" />
                      <span className={`text-sm ${t.highlight ? "text-gray-300" : "text-gray-600"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#schedule"
                  className={`block text-center py-3 rounded-xl font-semibold transition-all ${
                    t.highlight
                      ? "bg-sport-green hover:bg-sport-green-light text-white"
                      : "border-2 border-sport-dark text-sport-dark hover:bg-sport-dark hover:text-white"
                  }`}
                >
                  Выбрать
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTIONS */}
      <section id="sections" className="py-24 bg-sport-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <span className="text-sport-green font-medium text-sm uppercase tracking-widest">Футбольные секции</span>
              <h2 className="font-oswald text-4xl sm:text-5xl font-bold text-white mt-2 mb-6">
                Развиваем <span className="text-sport-green">чемпионов</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Наши тренеры — практикующие спортсмены с профессиональными лицензиями. Каждая секция адаптирована под возраст и уровень подготовки.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden h-64 lg:h-80">
              <img src={SECTION_IMG} alt="Футбольная секция" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {sections.map((s) => (
              <div key={s.title} className="bg-sport-gray border border-sport-green/10 hover:border-sport-green/40 rounded-2xl p-6 transition-all card-hover">
                <div className="text-4xl mb-4">{s.icon}</div>
                <div className="inline-block bg-sport-green/20 text-sport-green text-xs px-3 py-1 rounded-full mb-3">{s.age}</div>
                <h3 className="font-oswald text-white text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{s.desc}</p>
                <div className="space-y-2 mb-5 text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Icon name="Calendar" size={14} className="text-sport-green" />
                    {s.days}
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Icon name="Clock" size={14} className="text-sport-green" />
                    {s.time}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-oswald text-sport-green font-bold text-lg">{s.price}</span>
                  <a href="#contacts" className="text-white border border-white/20 hover:border-sport-green hover:text-sport-green px-4 py-2 rounded-lg text-sm transition-all">
                    Записаться
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sport-green font-medium text-sm uppercase tracking-widest">Наш зал</span>
            <h2 className="font-oswald text-4xl sm:text-5xl font-bold text-sport-dark mt-2">Галерея</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`rounded-2xl overflow-hidden ${i === 0 ? "md:col-span-2 md:row-span-2" : ""} aspect-square`}
              >
                <img
                  src={img}
                  alt={`Галерея ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sport-green font-medium text-sm uppercase tracking-widest">Мы всегда на связи</span>
            <h2 className="font-oswald text-4xl sm:text-5xl font-bold text-sport-dark mt-2">Контакты</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="space-y-6">
              {[
                { icon: "MapPin", title: "Адрес", value: "г. Москва, ул. Спортивная, 15", sub: "10 минут от метро Спортивная" },
                { icon: "Phone", title: "Телефон", value: "+7 (495) 123-45-67", sub: "Ежедневно 07:00 – 23:00" },
                { icon: "Mail", title: "Email", value: "info@sportarena.ru", sub: "Отвечаем в течение часа" },
                { icon: "Clock", title: "Режим работы", value: "Пн–Пт: 07:00 – 23:00", sub: "Сб–Вс: 08:00 – 22:00" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 card-hover">
                  <div className="w-12 h-12 rounded-xl bg-sport-dark flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon} size={20} className="text-sport-green" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs uppercase tracking-wide mb-0.5">{item.title}</div>
                    <div className="font-semibold text-sport-dark">{item.value}</div>
                    <div className="text-gray-500 text-sm">{item.sub}</div>
                  </div>
                </div>
              ))}

              <div className="flex gap-4 pt-2">
                {[
                  { icon: "MessageCircle", label: "Telegram", color: "bg-blue-500" },
                  { icon: "Phone", label: "WhatsApp", color: "bg-green-500" },
                  { icon: "Instagram", label: "Instagram", color: "bg-pink-500" },
                ].map((s) => (
                  <button key={s.label} className={`flex items-center gap-2 ${s.color} text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity`}>
                    <Icon name={s.icon} size={16} />
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-sport-dark rounded-2xl p-8 border border-sport-green/20">
              <h3 className="font-oswald text-white text-2xl font-bold mb-6">Напишите нам</h3>
              {contactSent ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-sport-green/20 flex items-center justify-center mx-auto mb-4">
                    <Icon name="CheckCircle" size={32} className="text-sport-green" />
                  </div>
                  <h4 className="font-oswald text-white text-xl font-bold mb-2">Сообщение отправлено!</h4>
                  <p className="text-gray-400 text-sm">Свяжемся с вами в ближайшее время</p>
                </div>
              ) : (
                <form onSubmit={handleContact} className="space-y-4">
                  <div>
                    <label className="text-gray-400 text-sm mb-1.5 block">Ваше имя</label>
                    <input
                      type="text"
                      placeholder="Иван Петров"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full bg-sport-gray border border-sport-green/20 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-sport-green transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm mb-1.5 block">Телефон</label>
                    <input
                      type="tel"
                      placeholder="+7 (999) 000-00-00"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      className="w-full bg-sport-gray border border-sport-green/20 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-sport-green transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm mb-1.5 block">Сообщение</label>
                    <textarea
                      rows={4}
                      placeholder="Хочу записаться на секцию / арендовать зал..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full bg-sport-gray border border-sport-green/20 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-sport-green transition-colors resize-none"
                    />
                  </div>
                  <button type="submit" className="w-full bg-sport-green hover:bg-sport-green-light text-white py-3.5 rounded-xl font-semibold transition-all">
                    Отправить
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-sport-dark border-t border-sport-green/20 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="font-oswald text-2xl font-bold text-white">СПОРТ<span className="text-sport-green">АРЕНА</span></span>
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-gray-500 hover:text-sport-green text-sm transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
            <p className="text-gray-600 text-sm">© 2024 СпортАрена</p>
          </div>
        </div>
      </footer>
    </div>
  );
}