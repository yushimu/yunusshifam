import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight,
  Database,
  TrendingUp,
  FileSpreadsheet,
  AlertTriangle,
  Layers,
  Wrench,
  Check,
  Building2,
  Users2,
  Clock,
  Zap,
  Info
} from 'lucide-react';
import { ProblemSolvingItem } from '../data/problemSolvingData';

interface ProblemSolvingModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: ProblemSolvingItem | null;
  onConsult?: () => void;
}

export const ProblemSolvingModal: React.FC<ProblemSolvingModalProps> = ({
  isOpen,
  onClose,
  item,
  onConsult,
}) => {
  const [dataTab, setDataTab] = useState<'raw' | 'clean'>('clean');

  // Lock body scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl h-full sm:h-auto sm:max-h-[92vh] flex flex-col bg-white sm:rounded-3xl shadow-2xl border-0 sm:border sm:border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button (Accessible at all times, elegant & crisp) */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-5 sm:right-5 z-40 p-2 sm:p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-900 text-slate-300 hover:text-white border border-slate-700/80 backdrop-blur-md shadow-lg transition-all cursor-pointer"
          title="Tutup (Esc)"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Unified Scrollable Container: Header, Body & Footer scroll naturally together */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">

          {/* MODAL HEADER - Now scrolls with content, freeing up full reading area on mobile */}
          <div className="relative px-5 py-6 sm:px-8 sm:py-8 bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] border-b border-slate-800 text-white">
            {/* Subtle Ambient Glow */}
            <div className="absolute top-0 right-1/4 w-80 h-24 bg-[#E6C564]/10 blur-3xl pointer-events-none" />

            <div className="space-y-2 relative z-10 max-w-3xl pr-12">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#E6C564] text-slate-950 text-[10px] font-extrabold uppercase tracking-wider">
                  {item.badge}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 text-[10px] font-medium border border-slate-700">
                  Klien: {item.client}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-slate-800/80 text-amber-300 text-[10px] font-medium border border-amber-500/30">
                  {item.datasetSize}
                </span>
              </div>

              <h2 className="text-lg sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                {item.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {item.tagline}
              </p>
            </div>
          </div>

          {/* MODAL BODY */}
          <div className="p-4 sm:p-6 md:p-8 space-y-7 sm:space-y-8 text-[#1E293B]">
          
          {/* 1. EXECUTIVE METRICS DASHBOARD */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {item.dashboardMetrics.map((metric, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-2xl bg-gradient-to-b from-slate-50 to-white border border-slate-200/90 shadow-xs flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    {metric.label}
                  </span>
                  <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded-md ${
                    metric.isPositive 
                      ? 'bg-emerald-100 text-emerald-800' 
                      : 'bg-amber-100 text-amber-800'
                  }`}>
                    {metric.change}
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                  {metric.value}
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  {metric.sublabel}
                </p>
              </div>
            ))}
          </div>

          {/* 2. SUMMARY CARD */}
          <div className="p-5 sm:p-6 rounded-2xl bg-amber-50/60 border border-amber-200/80 flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-[#C59B27] flex-shrink-0 mt-0.5">
              <Sparkles className="w-5 h-5 text-[#C59B27]" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Ringkasan Studi Kasus
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {item.summary}
              </p>
            </div>
          </div>

          {/* 3. MASALAH (THE PROBLEMS) */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
              <ShieldAlert className="w-5 h-5 text-rose-600" />
              <h3 className="text-base sm:text-lg font-extrabold text-[#0F172A]">
                {item.problemsHeading}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {item.problems.map((prob) => (
                <div 
                  key={prob.id}
                  className="p-4 sm:p-5 rounded-2xl bg-rose-50/40 border border-rose-200/80 hover:border-rose-300 transition-colors space-y-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-sm font-bold text-slate-900 leading-snug">
                      {prob.title}
                    </h4>
                    <span className="px-2 py-0.5 rounded-md bg-rose-100 text-rose-800 text-[10px] font-extrabold whitespace-nowrap">
                      {prob.impactTag}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {prob.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 4. TINDAKAN SISTEMATIS (THE ACTIONS TAKEN) */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
              <Layers className="w-5 h-5 text-[#C59B27]" />
              <h3 className="text-base sm:text-lg font-extrabold text-[#0F172A]">
                {item.actionsHeading}
              </h3>
            </div>

            <div className="space-y-3.5">
              {item.actions.map((act) => (
                <div 
                  key={act.stepNumber}
                  className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-amber-400/80 transition-all flex flex-col sm:flex-row items-start gap-4"
                >
                  {/* Step Number Circle */}
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-[#E6C564] font-extrabold text-sm flex items-center justify-center flex-shrink-0 shadow-sm">
                    0{act.stepNumber}
                  </div>

                  {/* Step Content */}
                  <div className="space-y-1.5 flex-1">
                    <h4 className="text-sm font-bold text-slate-900">
                      {act.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {act.desc}
                    </p>

                    {/* Sub-details */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {act.details.map((detail, idx) => (
                        <div 
                          key={idx}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 text-[11px] font-medium text-slate-700"
                        >
                          <Check className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5. SOLUSI TEKNIS & PIPELINE */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
              <Wrench className="w-5 h-5 text-[#2563EB]" />
              <h3 className="text-base sm:text-lg font-extrabold text-[#0F172A]">
                {item.solutionsHeading}
              </h3>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-[#102A43] text-white space-y-4 shadow-lg">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {item.solutionsDesc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {item.solutionHighlights.map((sol, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5 text-xs text-slate-200 leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#E6C564] flex-shrink-0 mt-0.5" />
                    <span>{sol}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 6. BUKTI DATA (EVIDENCE DASHBOARD & INTERACTIVE BEFORE/AFTER TABLE) */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <Database className="w-5 h-5 text-emerald-600" />
                <h3 className="text-base sm:text-lg font-extrabold text-[#0F172A]">
                  Bukti Data: Perbandingan Nyata Sebelum vs Sesudah
                </h3>
              </div>

              {/* Toggle Switch */}
              <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200 self-start sm:self-auto">
                <button
                  type="button"
                  onClick={() => setDataTab('raw')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    dataTab === 'raw'
                      ? 'bg-rose-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Sebelum Pembersihan (Mentah)
                </button>
                <button
                  type="button"
                  onClick={() => setDataTab('clean')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    dataTab === 'clean'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Sesudah Pembersihan (Rapi &amp; Baku)
                </button>
              </div>
            </div>

            {/* Dark Styled Table Matching User Reference Screenshot */}
            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-[#0B132B] shadow-xl">
              
              {/* Table Status Bar */}
              <div className="px-5 py-3 border-b border-slate-800/80 bg-[#070D1E] flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${dataTab === 'raw' ? 'bg-rose-500 animate-pulse' : 'bg-emerald-500'}`} />
                  <span className="font-semibold text-slate-300">
                    Mode Tampilan: {dataTab === 'raw' ? 'Dataset Mentah (20.450 Baris Anomali)' : 'Dataset Bersih Terverifikasi (Single Source of Truth)'}
                  </span>
                </div>
                <span className="text-[11px] text-slate-400">
                  {dataTab === 'raw' ? '⚠️ Ditemukan 3.240 Duplikat & Format Rusak' : '✨ 100% Format Baku & Siap Blast'}
                </span>
              </div>

              {/* Table Wrapper for Horizontal Scroll */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-[#0E1726] text-slate-400 uppercase text-[10px] tracking-wider font-extrabold border-b border-slate-800">
                    <tr>
                      <th className="py-3 px-4 w-12 text-center">NO</th>
                      <th className="py-3 px-4 min-w-[200px]">NAMA ENTITAS / KLIEN</th>
                      <th className="py-3 px-4 min-w-[150px]">KONTAK TELEPON</th>
                      <th className="py-3 px-4 min-w-[160px]">WILAYAH / KOTA</th>
                      <th className="py-3 px-4 min-w-[220px]">STATUS KUALITAS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-mono text-[11px]">
                    {dataTab === 'raw' ? (
                      item.rawRows.map((row) => (
                        <tr key={row.id} className="hover:bg-slate-800/40 transition-colors">
                          <td className="py-3.5 px-4 text-center font-bold text-slate-400">
                            {row.id}
                          </td>
                          <td className="py-3.5 px-4 font-semibold text-white">
                            {row.name}
                          </td>
                          <td className="py-3.5 px-4 text-slate-300">
                            {row.contact}
                          </td>
                          <td className="py-3.5 px-4 text-slate-300">
                            {row.city}
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-sans font-bold bg-rose-500/10 text-rose-400 border border-rose-500/30">
                              <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                              {row.status}
                            </span>
                          </td>
                        </tr>
                      ))
                    ) : (
                      item.cleanRows.map((row) => (
                        <tr key={row.id} className="hover:bg-slate-800/40 transition-colors">
                          <td className="py-3.5 px-4 text-center font-bold text-emerald-400">
                            {row.id}
                          </td>
                          <td className="py-3.5 px-4 font-semibold text-white">
                            {row.name}
                          </td>
                          <td className="py-3.5 px-4 text-emerald-300 font-bold">
                            {row.contact}
                          </td>
                          <td className="py-3.5 px-4 text-slate-300">
                            {row.city}
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-sans font-bold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                              {row.status}
                            </span>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              {/* Table Footer Callout */}
              <div className="p-4 bg-[#070D1E] border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-[#E6C564] flex-shrink-0" />
                  <span>
                    Simulasi 4 baris sampel representatif dari total 20.450 baris spreadsheet riil PT Ganda Industri.
                  </span>
                </div>
                <div className="font-semibold text-[#E6C564] whitespace-nowrap">
                  Kualitas Data: 100% Siap Operasional
                </div>
              </div>

            </div>
          </div>

          {/* 7. MANFAAT SETELAH DIBENARKAN (BUSINESS BENEFITS & ROI) */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
              <TrendingUp className="w-5 h-5 text-emerald-600" />
              <h3 className="text-base sm:text-lg font-extrabold text-[#0F172A]">
                {item.benefitsHeading}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {item.benefits.map((b, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl bg-gradient-to-b from-emerald-50/50 to-white border border-emerald-200/80 space-y-2"
                >
                  <div className="text-2xl font-black text-emerald-700">
                    {b.metric}
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">
                    {b.label}
                  </h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          </div>

          {/* MODAL FOOTER (Naturally at the bottom of the scroll flow) */}
          <div className="px-5 py-4 sm:px-8 sm:py-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Clock className="w-4 h-4 text-slate-400" />
              <span>Pengerjaan Selesai &amp; Diuji Validasi</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Tutup
              </button>
              {onConsult && (
                <button
                  onClick={() => {
                    onClose();
                    onConsult();
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-[#E6C564] via-[#D4AF37] to-[#B8860B] hover:brightness-105 shadow-md shadow-amber-900/10 transition-all cursor-pointer"
                >
                  <span>Konsultasikan Kebutuhan Data Anda</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
