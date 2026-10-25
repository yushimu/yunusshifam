import React, { useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  Layers, 
  ArrowRight,
  TrendingUp,
  DollarSign,
  PieChart,
  Scale,
  FolderKanban,
  Clock,
  BarChart3,
  Database,
  GitBranch,
  Globe,
  FileSpreadsheet
} from 'lucide-react';
import { ProjectItem } from '../data/projectData';

interface ProjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectItem | null;
  onConsult?: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  isOpen,
  onClose,
  project,
  onConsult,
}) => {
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

  if (!isOpen || !project) return null;

  const renderMetricIcon = (iconType?: string) => {
    switch (iconType) {
      case 'trending':
        return <TrendingUp className="w-4 h-4 text-emerald-600" />;
      case 'dollar':
        return <DollarSign className="w-4 h-4 text-[#C59B27]" />;
      case 'pie':
        return <PieChart className="w-4 h-4 text-rose-600" />;
      case 'scale':
        return <Scale className="w-4 h-4 text-blue-600" />;
      case 'matrix':
        return <FolderKanban className="w-4 h-4 text-purple-600" />;
      case 'calendar':
        return <Clock className="w-4 h-4 text-amber-600" />;
      case 'chart':
        return <BarChart3 className="w-4 h-4 text-blue-600" />;
      case 'check':
        return <CheckCircle2 className="w-4 h-4 text-emerald-600" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-[#C59B27]" />;
    }
  };

  const renderToolIcon = (iconType?: string) => {
    switch (iconType) {
      case 'supabase':
      case 'database':
        return <Database className="w-5 h-5 text-emerald-600" />;
      case 'github':
        return <GitBranch className="w-5 h-5 text-slate-900" />;
      case 'vercel':
      case 'globe':
        return <Globe className="w-5 h-5 text-blue-600" />;
      case 'spreadsheet':
        return <FileSpreadsheet className="w-5 h-5 text-emerald-700" />;
      case 'chart':
        return <BarChart3 className="w-5 h-5 text-[#C59B27]" />;
      case 'automation':
        return <Layers className="w-5 h-5 text-blue-600" />;
      default:
        return <FileSpreadsheet className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      {/* Click outside backdrop to close */}
      <div 
        className="absolute inset-0" 
        onClick={onClose} 
      />

      {/* Main Modal Window */}
      <div className="relative w-full max-w-5xl h-[92vh] flex flex-col bg-white rounded-2xl sm:rounded-3xl border border-[#C59B27]/40 shadow-2xl overflow-hidden z-10">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3.5 bg-[#0F172A] border-b border-slate-800 text-white select-none shrink-0">
          
          {/* Project Title & Badge */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#E6C564] to-[#C59B27] flex items-center justify-center text-slate-950 shadow-sm shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="truncate">
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight truncate">
                  {project.title}
                </h3>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {project.badge}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 truncate">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Close Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              title="Tutup (Esc)"
              className="p-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 hover:text-rose-300 border border-rose-500/30 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 space-y-8 bg-slate-50/50">
          
          {/* Header Summary & Category */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-slate-900 text-[#E6C564] border border-[#C59B27]/40 text-xs font-bold uppercase tracking-wider">
                  {project.category}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-800 text-xs font-bold sm:hidden">
                  {project.badge}
                </span>
              </div>
              <span className="text-xs font-medium text-slate-500">
                {project.systemTag || 'Data & Management System'}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-2">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base font-semibold text-[#B8860B] mb-4">
              {project.subtitle}
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {project.summary}
            </p>

            {/* Pilar Metrik Utama Proyek */}
            {project.keyMetrics && project.keyMetrics.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mt-6 pt-6 border-t border-slate-100">
                {project.keyMetrics.map((metric, mIdx) => (
                  <div key={mIdx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs">
                    <div className="flex items-center gap-2 text-slate-900 font-bold text-xs mb-1">
                      {renderMetricIcon(metric.iconType)}
                      <span>{mIdx + 1}. {metric.label}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-snug">
                      {metric.sublabel}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Visual Showcase (Mockup Container) */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-700/80 shadow-xl bg-slate-950">
            {/* Mockup Header Bar */}
            <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400 select-none">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="text-[11px] text-slate-400 font-mono ml-2 hidden sm:inline">
                  {project.mockupUrl || `${project.id}.workspace/dashboard`}
                </span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{project.mockupBadge || 'Live System Snapshot'}</span>
              </div>
            </div>

            {/* Image Display */}
            <div className="relative overflow-hidden bg-slate-950 flex items-center justify-center p-2 sm:p-4">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-auto object-contain max-h-[550px] rounded-lg select-none"
              />
            </div>

            {/* Mockup Caption Footer */}
            <div className="px-4 py-2.5 bg-slate-900/90 border-t border-slate-800/80 text-center text-xs text-slate-400">
              {project.imageCaption || `Antarmuka Dasbor ${project.title}`}
            </div>
          </div>

          {/* Problem vs Solution Deep-Dive */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Kolom 1: Kendala */}
              <div className="rounded-2xl p-5 sm:p-6 bg-rose-50/50 border border-rose-100 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-rose-700 font-extrabold text-sm uppercase tracking-wider mb-4 pb-2 border-b border-rose-200">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    <span>{project.problemsHeading || 'Kendala yang Dihadapi:'}</span>
                  </div>
                  <div className="space-y-4">
                    {project.problems.map((prob, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-rose-200/80 text-rose-800 text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                            {prob.title}
                          </h4>
                          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                            {prob.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Kolom 2: Solusi */}
              <div className="rounded-2xl p-5 sm:p-6 bg-emerald-50/50 border border-emerald-100 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-emerald-800 font-extrabold text-sm uppercase tracking-wider mb-4 pb-2 border-b border-emerald-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{project.solutionsHeading || `Solusi yang Diberikan Melalui ${project.title}:`}</span>
                  </div>
                  <div className="space-y-4">
                    {project.solutions.map((sol, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-emerald-200/80 text-emerald-900 text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                            {sol.title}
                          </h4>
                          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                            {sol.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Tools & Tech Stack */}
            <div className="pt-6 border-t border-slate-100">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#C59B27]" />
                <span>Teknologi &amp; Alat yang Digunakan (Tech Stack):</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                {project.tools.map((tool, tIdx) => (
                  <div key={tIdx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-white border border-slate-200/80 shadow-2xs shrink-0">
                      {renderToolIcon(tool.iconType)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h5 className="font-extrabold text-sm text-[#0F172A]">{tool.name}</h5>
                        {tool.tagBadge && (
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${tool.badgeColor || 'bg-slate-200 text-slate-800'}`}>
                            {tool.tagBadge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {tool.desc || tool.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fitur Utama */}
            {project.features && project.features.length > 0 && (
              <div className="pt-6 border-t border-slate-100">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Fitur Utama &amp; Keunggulan Sistem:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50/80 p-2.5 rounded-xl border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
              {project.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-[11px] font-semibold"
                >
                  #{tag}
                </span>
              ))}
            </div>

          </div>

        </div>

        {/* Modal Bottom Action Footbar */}
        <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3.5 bg-white border-t border-slate-200 shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            Tutup
          </button>

          {onConsult && (
            <button
              onClick={() => {
                onClose();
                onConsult();
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-[#E6C564] via-[#D4AF37] to-[#B8860B] hover:brightness-105 shadow-md shadow-amber-900/15 transition-all duration-150 cursor-pointer"
            >
              <span>{project.consultationText || `Konsultasi Solusi ${project.title}`}</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
