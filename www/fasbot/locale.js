

(function () {
  const I18N = {
    en: {
      per_month: 'mo',
      page_title: 'AI Dating Profile Optimizer',
      badge_label: 'AI profile optimization',
      hero_title: 'Get 10× more matches with AI‑optimized dating profiles',
      hero_subtitle: 'Join 15,000+ singles using AI to transform their dating results in 60 seconds.',
      cta_waitlist: 'Join the waitlist — Launch Feb 2026',
      stat_growth: 'Average match lift: 3–10×',

      preview_label: 'Profile preview',
      preview_headline: '“A little sass + warmth = more replies”',
      ai_rating: 'AI rating {{score}}',
      input_label: 'Input:',
      output_label: 'Output:',
      input_sample: '“I love coffee, morning runs, and sharp humor.”',
      output_sample: '“I pick spots with the best flat white, joke faster than the algorithm, and can be on a date in 15 minutes.”',
      metric_photo: 'Photo quality {{score}}',
      metric_friendliness: 'Friendliness {{score}}',
      metric_authenticity: 'Authenticity {{score}}',
      preview_note: 'We tune your tone, add spark, and give precise photo tips — copy‑paste ready in 60 seconds.',

      feature_bio_title: 'AI bio generation',
      feature_bio_desc: 'Personalized descriptions that highlight what makes you you.',
      feature_tones_title: '5 unique variations',
      feature_tones_desc: 'Switch tones easily: friendly, confident, funny, serious, or bold.',
      feature_platform_title: 'Platform‑aware optimization',
      feature_platform_desc: 'Tailored for Tinder, Bumble, and Hinge with their nuances in mind.',
      feature_photos_title: 'Photo scoring & tips',
      feature_photos_desc: 'Auto scores 1–10 for quality, friendliness, and authenticity.',
      feature_suggestions_title: 'Concrete improvement suggestions',
      feature_suggestions_desc: 'Clear recommendations for photos, bios, and opener questions.',
      feature_fast_title: 'Results in 60 seconds',
      feature_fast_desc: 'Copy‑paste ready profiles with no complicated setup.',

      social_title: 'Social proof',
      social_line1: '“47% of Gen Z already use AI for dating” — a statistic that highlights the trend.',
      social_line2: 'Users report 3–10× more matches after using AI suggestions.',

      pricing_title: 'Pricing preview',
      plan_one_time: 'One‑time',
      plan_subscription: 'Subscription',
      early_discount: 'Limited early‑access discount',
      what_inside: "What's included",
      inside_item_1: 'AI bio + 5 tones',
      inside_item_2: 'Photo tips with rating',
      inside_item_3: 'Ready‑made replies by platform',
      inside_item_4: 'One‑click export',

      early_access_title: 'Get early access first',
      early_access_desc: "Leave your email — we’ll send an invite and gift a bonus photo‑tips pack. We never spam.",
      email_placeholder: 'Your email',
      get_access_btn: 'Get early access',
      no_spam: 'We never spam',
    },
    th: {
      per_month: 'เดือน',
      page_title: 'ตัวช่วยปรับโปรไฟล์หาคู่ด้วย AI',
      badge_label: 'ปรับโปรไฟล์ด้วย AI',
      hero_title: 'ได้แมตช์มากขึ้น 10 เท่า ด้วยโปรไฟล์หาคู่ที่ AI ปรับให้',
      hero_subtitle: 'ร่วมกับผู้โสดกว่า 15,000+ คนที่ใช้ AI เพื่อยกระดับผลลัพธ์การเดตใน 60 วินาที',
      cta_waitlist: 'เข้าร่วมรายชื่อรอ — เปิดตัว ก.พ. 2026',
      stat_growth: 'เพิ่มแมตช์เฉลี่ย: 3–10×',

      preview_label: 'พรีวิวโปรไฟล์',
      preview_headline: '“แซวพอดี + อบอุ่นนิด ๆ = ได้คำตอบมากขึ้น”',
      ai_rating: 'คะแนน AI {{score}}',
      input_label: 'อินพุต:',
      output_label: 'เอาต์พุต:',
      input_sample: '“ชอบกาแฟ วิ่งตอนเช้า และมุกคม ๆ”',
      output_sample: '“ตามหาร้านแฟลตไวท์ที่ดีที่สุด แซวไวกว่าอัลกอริทึม และพร้อมไปเดตใน 15 นาที”',
      metric_photo: 'คุณภาพรูป {{score}}',
      metric_friendliness: 'เป็นมิตร {{score}}',
      metric_authenticity: 'ความเป็นตัวเอง {{score}}',
      preview_note: 'ปรับโทน เพิ่มความมีชีวิตชีวา และให้ทิปส์รูปแบบชัดเจน — พร้อมคัดลอกใน 60 วินาที',

      feature_bio_title: 'สร้างไบโอด้วย AI',
      feature_bio_desc: 'คำบรรยายแบบปรับให้เหมาะกับคุณ เพื่อดึงจุดเด่นของคุณออกมา',
      feature_tones_title: '5 สไตล์ไม่ซ้ำ',
      feature_tones_desc: 'เปลี่ยนโทนได้ง่าย: เป็นกันเอง มั่นใจ ตลก จริงจัง หรือสายกวน',
      feature_platform_title: 'ปรับตามแพลตฟอร์ม',
      feature_platform_desc: 'ปรับให้เหมาะกับ Tinder, Bumble และ Hinge พร้อมเข้าใจความต่างของแต่ละที่',
      feature_photos_title: 'ให้คะแนนรูป + คำแนะนำ',
      feature_photos_desc: 'ให้คะแนนอัตโนมัติ 1–10 ตามคุณภาพ ความเป็นมิตร และความเป็นตัวเอง',
      feature_suggestions_title: 'ข้อเสนอแนะที่ทำตามได้ทันที',
      feature_suggestions_desc: 'คำแนะนำชัดเจนสำหรับรูป ไบโอ และคำเปิดบทสนทนา',
      feature_fast_title: 'ได้ผลใน 60 วินาที',
      feature_fast_desc: 'โปรไฟล์พร้อมคัดลอก ใช้ง่าย ไม่ต้องตั้งค่าเยอะ',

      social_title: 'หลักฐานทางสังคม',
      social_line1: '“47% ของ Gen Z ใช้ AI สำหรับการเดตแล้ว” — ตัวเลขที่สะท้อนเทรนด์',
      social_line2: 'ผู้ใช้รายงานว่าได้แมตช์เพิ่มขึ้น 3–10× หลังใช้คำแนะนำจาก AI',

      pricing_title: 'พรีวิวราคา',
      plan_one_time: 'จ่ายครั้งเดียว',
      plan_subscription: 'สมัครสมาชิก',
      early_discount: 'ส่วนลดช่วง Early Access (จำกัด)',
      what_inside: 'มีอะไรบ้าง',
      inside_item_1: 'ไบโอ AI + 5 โทน',
      inside_item_2: 'ทิปส์รูปพร้อมคะแนน',
      inside_item_3: 'ไอเดียตอบกลับตามแพลตฟอร์ม',
      inside_item_4: 'ส่งออกได้ในคลิกเดียว',

      early_access_title: 'รับสิทธิ์เข้าถึงก่อนใคร',
      early_access_desc: 'ใส่อีเมลไว้ — เราจะส่งคำเชิญและมอบแพ็กทิปส์รูปเป็นของแถม เราไม่ส่งสแปม',
      email_placeholder: 'อีเมลของคุณ',
      get_access_btn: 'รับสิทธิ์ Early Access',
      no_spam: 'เราไม่ส่งสแปม',
    },
    ru: {
      page_title: 'AI оптимизатор профилей знакомств',
      badge_label: 'AI оптимизация профилей',
      hero_title: 'Получи в 10 раз больше совпадений с AI‑оптимизированными профилями знакомств',
      hero_subtitle: 'Присоединись к 15,000+ людей, которые используют AI, чтобы улучшить успех в знакомствах за 60 секунд.',
      cta_waitlist: 'В список ожидания — запуск февраль 2026',
      stat_growth: 'Средний рост совпадений: 3–10×',

      preview_label: 'Предпросмотр профиля',
      preview_headline: '«Небольшая дерзость + тепло = больше ответов»',
      ai_rating: 'AI рейтинг {{score}}',
      input_label: 'Ввод:',
      output_label: 'Выход:',
      input_sample: '«Обожаю кофе, утренние пробежки и острый юмор.»',
      output_sample: '«Выбираю места с лучшим флэт уайт, шучу быстрее, чем алгоритм, и могу быть на свидании через 15 минут.»',
      metric_photo: 'Качество фото {{score}}',
      metric_friendliness: 'Приветливость {{score}}',
      metric_authenticity: 'Аутентичность {{score}}',
      preview_note: 'Подбираем тон, добавляем живость и даём точные подсказки по фото — готово к copy‑paste за 60 секунд.',

      feature_bio_title: 'AI генерация био',
      feature_bio_desc: 'Персонализированные описания, которые подчёркивают вашу уникальность.',
      feature_tones_title: '5 уникальных вариаций',
      feature_tones_desc: 'Легко меняйте тон: дружелюбный, уверенный, смешной, серьёзный или дерзкий.',
      feature_platform_title: 'Оптимизация под платформу',
      feature_platform_desc: 'Настраиваем под Tinder, Bumble и Hinge с учётом нюансов каждой.',
      feature_photos_title: 'Оценка фото и советы',
      feature_photos_desc: 'Авто‑оценка 1–10 по качеству, приветливости и аутентичности.',
      feature_suggestions_title: 'Конкретные улучшения',
      feature_suggestions_desc: 'Понятные рекомендации по фото, био и вопросам для начала общения.',
      feature_fast_title: 'Результат за 60 секунд',
      feature_fast_desc: 'Профили, готовые к копированию — без сложных настроек.',

      social_title: 'Социальное доказательство',
      social_line1: '«47% поколения Z уже используют AI для знакомств» — статистика, которая подтверждает тренд.',
      social_line2: 'Пользователи сообщают о 3–10× большем числе совпадений после AI подсказок.',

      pricing_title: 'Предпросмотр цены',
      plan_one_time: 'Разово',
      plan_subscription: 'Подписка',
      early_discount: 'Ограниченная скидка раннего доступа',
      what_inside: 'Что внутри',
      inside_item_1: 'AI био + 5 тонов',
      inside_item_2: 'Советы по фото с рейтингом',
      inside_item_3: 'Готовые ответы под платформы',
      inside_item_4: 'Экспорт в один клик',

      early_access_title: 'Получите ранний доступ первым',
      early_access_desc: 'Оставьте email — пришлём приглашение и подарим бонусный пакет подсказок по фото. Мы никогда не будем спамить.',
      email_placeholder: 'Ваш email',
      get_access_btn: 'Получить ранний доступ',
      no_spam: 'Мы никогда не будем спамить',

      per_month: 'мес',
    },
  };

  function format(str, vars) {
    if (!vars) return str;
    return String(str).replace(/\{\{\s*([a-zA-Z0-9_]+)\s*\}\}/g, function (_, k) {
      return Object.prototype.hasOwnProperty.call(vars, k) ? String(vars[k]) : '';
    });
  }

  window.I18N = I18N;

  window.t = function (lang, key, vars) {
    const table = I18N[lang] || I18N.en;
    const raw = (table && table[key]) || (I18N.en && I18N.en[key]) || key;
    return format(raw, vars);
  };
})();
