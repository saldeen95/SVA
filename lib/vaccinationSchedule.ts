import { VaccineSchedule } from './types'

export const sudaneseVaccinationSchedule: VaccineSchedule[] = [
  {
    id: '1',
    name: 'Birth',
    nameAr: 'عند الولادة',
    ageInMonths: 0,
    ageLabel: 'At Birth',
    ageLabelAr: 'عند الولادة',
    vaccines: ['BCG', 'Polio (0)'],
    vaccinesAr: ['الدرن (BCG)', 'شلل الأطفال الصفرية'],
    vaccinesFull: [
      {
        id: 'vaccine-bcg',
        name: 'BCG (Tuberculosis)',
        nameAr: 'الدرن (الدرن الرئوي)',
        sideEffects: [
          {
            nameAr: 'احمرار وتورم في موقع الحقن',
            name: 'Redness and swelling at injection site',
            treatmentAr: 'لا يتطلب تدخل، يختفي من تلقاء نفسه خلال أسابيع',
            treatment: 'No treatment needed, resolves on its own within weeks',
            severity: 'mild',
          },
          {
            nameAr: 'ندبة صغيرة في موقع الحقن',
            name: 'Small scar at injection site',
            treatmentAr: 'طبيعي وآمن، لا يتطلب علاج',
            treatment: 'Normal and safe, no treatment needed',
            severity: 'mild',
          },
        ],
      },
      {
        id: 'vaccine-polio-0',
        name: 'Polio Vaccine (0)',
        nameAr: 'لقاح شلل الأطفال الصفري',
        sideEffects: [
          {
            nameAr: 'حمى خفيفة',
            name: 'Low fever',
            treatmentAr: 'خافض حرارة (باراسيتامول)، لبسات فاتحة، شرب سوائل كافية',
            treatment: 'Paracetamol, light clothing, adequate fluids',
            severity: 'mild',
          },
          {
            nameAr: 'آلام عضلية طفيفة',
            name: 'Mild muscle pain',
            treatmentAr: 'كمادات دافئة، راحة كافية',
            treatment: 'Warm compresses, adequate rest',
            severity: 'mild',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    name: '2 Months',
    nameAr: 'عمر شهرين',
    ageInMonths: 2,
    ageLabel: 'At 2 Months',
    ageLabelAr: 'عمر شهرين',
    vaccines: ['Pentavalent 1', 'Polio 1', 'Rotavirus 1', 'PCV 1'],
    vaccinesAr: ['الخماسي 1', 'شلل 1', 'روتا 1', 'المكورات 1'],
    vaccinesFull: [
      {
        id: 'vaccine-pentavalent-1',
        name: 'Pentavalent Vaccine 1',
        nameAr: 'اللقاح الخماسي 1',
        sideEffects: [
          {
            nameAr: 'حمى معتدلة',
            name: 'Moderate fever',
            treatmentAr: 'باراسيتامول، كمادات باردة أو دافئة، ملابس فاتحة',
            treatment: 'Paracetamol, cold or warm compresses, light clothing',
            severity: 'mild',
          },
          {
            nameAr: 'تورم وألم في موقع الحقن',
            name: 'Swelling and pain at injection site',
            treatmentAr: 'كمادات دافئة، حركة الطرف بلطف',
            treatment: 'Warm compresses, gentle movement of the limb',
            severity: 'mild',
          },
          {
            nameAr: 'بكاء أكثر من المعتاد',
            name: 'Crying more than usual',
            treatmentAr: 'حضن الأم، هدوء وراحة',
            treatment: "Mother's embrace, calmness and rest",
            severity: 'mild',
          },
        ],
      },
      {
        id: 'vaccine-polio-1',
        name: 'Polio Vaccine 1',
        nameAr: 'لقاح شلل الأطفال 1',
        sideEffects: [
          {
            nameAr: 'إسهال خفيف',
            name: 'Mild diarrhea',
            treatmentAr: 'زيادة السوائل، الرضاعة الطبيعية المستمرة',
            treatment: 'Increased fluids, continue breastfeeding',
            severity: 'mild',
          },
        ],
      },
      {
        id: 'vaccine-rotavirus-1',
        name: 'Rotavirus Vaccine 1',
        nameAr: 'لقاح روتا 1',
        sideEffects: [
          {
            nameAr: 'إسهال خفيف أو إمساك',
            name: 'Mild diarrhea or constipation',
            treatmentAr: 'شرب سوائل كافية، الرضاعة الطبيعية المستمرة',
            treatment: 'Adequate fluids, continue breastfeeding',
            severity: 'mild',
          },
        ],
      },
      {
        id: 'vaccine-pcv-1',
        name: 'Pneumococcal Vaccine 1',
        nameAr: 'لقاح المكورات الرئوية 1',
        sideEffects: [
          {
            nameAr: 'حمى خفيفة إلى معتدلة',
            name: 'Mild to moderate fever',
            treatmentAr: 'باراسيتامول، مراقبة الحرارة',
            treatment: 'Paracetamol, monitor temperature',
            severity: 'mild',
          },
        ],
      },
    ],
  },
  {
    id: '3',
    name: '4 Months',
    nameAr: 'عمر 4 شهور',
    ageInMonths: 4,
    ageLabel: 'At 4 Months',
    ageLabelAr: 'عمر 4 شهور',
    vaccines: ['Pentavalent 2', 'Polio 2', 'Rotavirus 2', 'PCV 2'],
    vaccinesAr: ['الخماسي 2', 'شلل 2', 'روتا 2', 'المكورات 2'],
    vaccinesFull: [
      {
        id: 'vaccine-pentavalent-2',
        name: 'Pentavalent Vaccine 2',
        nameAr: 'اللقاح الخماسي 2',
        sideEffects: [
          {
            nameAr: 'حمى معتدلة',
            name: 'Moderate fever',
            treatmentAr: 'باراسيتامول، كمادات، ملابس فاتحة',
            treatment: 'Paracetamol, compresses, light clothing',
            severity: 'mild',
          },
        ],
      },
      {
        id: 'vaccine-polio-2',
        name: 'Polio Vaccine 2',
        nameAr: 'لقاح شلل الأطفال 2',
        sideEffects: [
          {
            nameAr: 'أعراض معدية خفيفة',
            name: 'Mild gastrointestinal symptoms',
            treatmentAr: 'الرضاعة الطبيعية المستمرة، سوائل كافية',
            treatment: 'Continue breastfeeding, adequate fluids',
            severity: 'mild',
          },
        ],
      },
      {
        id: 'vaccine-rotavirus-2',
        name: 'Rotavirus Vaccine 2',
        nameAr: 'لقاح روتا 2',
        sideEffects: [
          {
            nameAr: 'إسهال أو إمساك خفيف',
            name: 'Mild diarrhea or constipation',
            treatmentAr: 'مراقبة طبيعية، سوائل كافية',
            treatment: 'Normal monitoring, adequate fluids',
            severity: 'mild',
          },
        ],
      },
      {
        id: 'vaccine-pcv-2',
        name: 'Pneumococcal Vaccine 2',
        nameAr: 'لقاح المكورات الرئوية 2',
        sideEffects: [
          {
            nameAr: 'تورم خفيف في موقع الحقن',
            name: 'Mild swelling at injection site',
            treatmentAr: 'كمادات دافئة لمدة 10-15 دقيقة',
            treatment: 'Warm compresses for 10-15 minutes',
            severity: 'mild',
          },
        ],
      },
    ],
  },
  {
    id: '4',
    name: '6 Months',
    nameAr: 'عمر 6 شهور',
    ageInMonths: 6,
    ageLabel: 'At 6 Months',
    ageLabelAr: 'عمر 6 شهور',
    vaccines: ['Pentavalent 3', 'Polio 3', 'Rotavirus 3', 'PCV 3', 'Polio Booster'],
    vaccinesAr: ['الخماسي 3', 'شلل 3', 'روتا 3', 'المكورات 3', 'شلل منشطة'],
    vaccinesFull: [
      {
        id: 'vaccine-pentavalent-3',
        name: 'Pentavalent Vaccine 3',
        nameAr: 'اللقاح الخماسي 3',
        sideEffects: [
          {
            nameAr: 'حمى معتدلة وألم موضعي',
            name: 'Moderate fever and local pain',
            treatmentAr: 'باراسيتامول، كمادات دافئة',
            treatment: 'Paracetamol, warm compresses',
            severity: 'mild',
          },
        ],
      },
      {
        id: 'vaccine-polio-3',
        name: 'Polio Vaccine 3',
        nameAr: 'لقاح شلل الأطفال 3',
        sideEffects: [
          {
            nameAr: 'أعراض هضمية طفيفة',
            name: 'Mild digestive symptoms',
            treatmentAr: 'غذاء طبيعي منتظم',
            treatment: 'Normal regular diet',
            severity: 'mild',
          },
        ],
      },
      {
        id: 'vaccine-rotavirus-3',
        name: 'Rotavirus Vaccine 3',
        nameAr: 'لقاح روتا 3',
        sideEffects: [
          {
            nameAr: 'أعراض هضمية خفيفة جداً',
            name: 'Very mild digestive symptoms',
            treatmentAr: 'مراقبة طبيعية',
            treatment: 'Normal monitoring',
            severity: 'mild',
          },
        ],
      },
      {
        id: 'vaccine-pcv-3',
        name: 'Pneumococcal Vaccine 3',
        nameAr: 'لقاح المكورات الرئوية 3',
        sideEffects: [
          {
            nameAr: 'حمى خفيفة',
            name: 'Low fever',
            treatmentAr: 'باراسيتامول حسب الحاجة',
            treatment: 'Paracetamol as needed',
            severity: 'mild',
          },
        ],
      },
      {
        id: 'vaccine-polio-booster',
        name: 'Polio Booster',
        nameAr: 'لقاح شلل الأطفال المنشط',
        sideEffects: [
          {
            nameAr: 'تورم وألم في موقع الحقن',
            name: 'Swelling and pain at injection site',
            treatmentAr: 'كمادات دافئة أو باردة',
            treatment: 'Warm or cold compresses',
            severity: 'mild',
          },
        ],
      },
    ],
  },
  {
    id: '5',
    name: '9 Months',
    nameAr: 'عمر 9 شهور',
    ageInMonths: 9,
    ageLabel: 'At 9 Months',
    ageLabelAr: 'عمر 9 شهور',
    vaccines: ['Measles 1', 'Yellow Fever'],
    vaccinesAr: ['الحصبة 1', 'الحمى الصفراء'],
    vaccinesFull: [
      {
        id: 'vaccine-measles-1',
        name: 'Measles Vaccine 1',
        nameAr: 'لقاح الحصبة 1',
        sideEffects: [
          {
            nameAr: 'حمى معتدلة (بعد 5-7 أيام)',
            name: 'Moderate fever (after 5-7 days)',
            treatmentAr: 'باراسيتامول، شرب سوائل، راحة',
            treatment: 'Paracetamol, fluids, rest',
            severity: 'mild',
          },
          {
            nameAr: 'طفح جلدي خفيف',
            name: 'Mild rash',
            treatmentAr: 'مراقبة طبيعية، لا يتطلب علاج خاص',
            treatment: 'Normal monitoring, no special treatment',
            severity: 'mild',
          },
        ],
      },
      {
        id: 'vaccine-yellow-fever',
        name: 'Yellow Fever Vaccine',
        nameAr: 'لقاح الحمى الصفراء',
        sideEffects: [
          {
            nameAr: 'حمى خفيفة إلى معتدلة',
            name: 'Mild to moderate fever',
            treatmentAr: 'باراسيتامول، كمادات',
            treatment: 'Paracetamol, compresses',
            severity: 'mild',
          },
          {
            nameAr: 'صداع خفيف',
            name: 'Mild headache',
            treatmentAr: 'راحة هادئة',
            treatment: 'Quiet rest',
            severity: 'mild',
          },
        ],
      },
    ],
  },
  {
    id: '6',
    name: '18 Months',
    nameAr: 'عمر 18 شهر',
    ageInMonths: 18,
    ageLabel: 'At 18 Months',
    ageLabelAr: 'عمر 18 شهر',
    vaccines: ['Measles 2', 'Polio Booster'],
    vaccinesAr: ['الحصبة 2', 'شلل منشطة'],
    vaccinesFull: [
      {
        id: 'vaccine-measles-2',
        name: 'Measles Vaccine 2',
        nameAr: 'لقاح الحصبة 2',
        sideEffects: [
          {
            nameAr: 'حمى معتدلة (بعد أسبوع)',
            name: 'Moderate fever (after a week)',
            treatmentAr: 'باراسيتامول، سوائل كافية',
            treatment: 'Paracetamol, adequate fluids',
            severity: 'mild',
          },
        ],
      },
      {
        id: 'vaccine-polio-booster-2',
        name: 'Polio Booster',
        nameAr: 'لقاح شلل الأطفال المنشط',
        sideEffects: [
          {
            nameAr: 'تورم خفيف في موقع الحقن',
            name: 'Mild swelling at injection site',
            treatmentAr: 'كمادات دافئة',
            treatment: 'Warm compresses',
            severity: 'mild',
          },
        ],
      },
    ],
  },
]
