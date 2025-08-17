import React from 'react';
import type { Module } from './types';
import { VideoIcon, ChecklistIcon, CaseStudyIcon, QuizIcon, WorksheetIcon, SimulationIcon, DocumentIcon, AudioIcon, EbookIcon, QandAIcon } from './components/Icons';

export const COURSE_MODULES: Module[] = [
  {
    id: 1,
    title: 'Orientation to Critical Care',
    description: 'ICU setup, monitoring devices, common equipment.',
    topics: [
      'Roles & responsibilities of a critical care nurse.',
      'Patient safety & infection control.',
    ],
    format: 'Video lecture + checklist PDF',
    icon: (
      <div className="flex items-center gap-2">
        <VideoIcon className="w-5 h-5" />
        <ChecklistIcon className="w-5 h-5" />
      </div>
    ),
  },
  {
    id: 2,
    title: 'Airway & Ventilator Basics',
    description: 'Endotracheal tube care.',
    topics: [
      'Types of ventilators & modes (SIMV, CPAP, BiPAP, etc.).',
      'Nursing care of ventilated patients.',
    ],
    format: 'Animated explainer video + case study',
    icon: (
      <div className="flex items-center gap-2">
        <VideoIcon className="w-5 h-5" />
        <CaseStudyIcon className="w-5 h-5" />
      </div>
    ),
  },
  {
    id: 3,
    title: 'Cardiac Monitoring & ECG Interpretation',
    description: 'Understanding ECG leads.',
    topics: [
      'Recognizing arrhythmias (bradycardia, tachycardia, VF, VT).',
      'Nursing interventions during emergencies.',
    ],
    format: 'Quiz + interactive ECG scenarios',
    icon: (
      <div className="flex items-center gap-2">
        <QuizIcon className="w-5 h-5" />
        <SimulationIcon className="w-5 h-5" />
      </div>
    ),
  },
  {
    id: 4,
    title: 'ABG (Arterial Blood Gas) Made Simple',
    description: 'How to read pH, PaO2, PaCO2, HCO3.',
    topics: [
      'Respiratory vs metabolic acidosis/alkalosis.',
      'Bedside nursing actions.',
    ],
    format: 'Worksheet + flashcards',
    icon: (
      <div className="flex items-center gap-2">
        <WorksheetIcon className="w-5 h-5" />
      </div>
    ),
  },
  {
    id: 5,
    title: 'Emergency Response Protocols',
    description: 'Code Blue management.',
    topics: ['CPR (BLS/ACLS basics).', 'Shock recognition & management.'],
    format: 'Simulation video + decision-making quiz',
    icon: (
      <div className="flex items-center gap-2">
        <SimulationIcon className="w-5 h-5" />
        <QuizIcon className="w-5 h-5" />
      </div>
    ),
  },
  {
    id: 6,
    title: 'ICU Medications & Infusions',
    description: 'Common drugs: Noradrenaline, Dopamine, Dobutamine, Sedatives.',
    topics: ['Infusion protocols.', 'Side effects & safety checks.'],
    format: 'PDF drug guide + case quiz',
    icon: (
      <div className="flex items-center gap-2">
        <DocumentIcon className="w-5 h-5" />
        <QuizIcon className="w-5 h-5" />
      </div>
    ),
  },
  {
    id: 7,
    title: 'Documentation & Communication',
    description: 'SBAR handover method.',
    topics: ['ICU nursing notes.', 'Effective teamwork in critical care.'],
    format: 'Template download + role-play audio',
    icon: (
      <div className="flex items-center gap-2">
        <DocumentIcon className="w-5 h-5" />
        <AudioIcon className="w-5 h-5" />
      </div>
    ),
  },
];


export const BONUS_MODULE: Module = {
    id: 8,
    title: 'Career Roadmap for Nursing Students',
    description: 'How to prepare for NCLEX, HAAD, Prometric, MOH.',
    topics: [
      'Resume & interview skills for ICU jobs.',
      'How to move from India → International nursing careers.',
    ],
    format: 'Career guide eBook + recorded Q&A session',
    icon: (
      <div className="flex items-center gap-2">
        <EbookIcon className="w-5 h-5" />
        <QandAIcon className="w-5 h-5" />
      </div>
    ),
}