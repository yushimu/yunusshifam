import React from 'react';
import { ConsultationForm } from './ConsultationForm';
import { COMPANY_INFO } from '../data/siteData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Sparkles, 
  MessageCircle, 
  ArrowUpRight,
  Globe2,
  ShieldCheck
} from 'lucide-react';

export const ContactPageView: React.FC = () => {
  return (
    <div className="bg-[#FAF5EC] min-h-[85vh] py-12 sm:py-16 selection:bg-[#E6C564]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-[#C59B27]/30 text-[#94721C] text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Kontak &amp; Konsultasi Langsung</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Hubungi Yunus Shifa Muntari
          </h1>
          
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Mulai dari audit awal dataset, otomasi spreadsheet, hingga perancangan sistem manajemen operasional bisnis. Saya siap membantu bisnis Anda mengambil keputusan lebih baik berbasis data yang akurat.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Email Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs hover:border-[#C59B27] hover:shadow-lg transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-[#E6C564] flex items-center justify-center mb-4 shadow-sm">
                <Mail className="w-5 h-5 text-[#E6C564]" />
              </div>
              <h3 className="font-extrabold text-base text-[#0F172A] mb-1">
                Email Resmi
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Untuk pengiriman brief proyek, proposal formal, atau dokumen kerahasiaan (NDA).
              </p>
            </div>
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="text-xs sm:text-sm font-bold text-[#B8860B] hover:text-[#8C6506] hover:underline break-all inline-flex items-center gap-1"
            >
              <span>{COMPANY_INFO.email}</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
            </a>
          </div>

          {/* WhatsApp Hotline Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs hover:border-emerald-500 hover:shadow-lg transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-4 shadow-sm">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-extrabold text-base text-[#0F172A] mb-1">
                WhatsApp Hotline
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Respon cepat untuk tanya-jawab langsung dan penjadwalan meeting konsultasi.
              </p>
            </div>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Halo%20Yunus%20Shifa%20Muntari,%20saya%20ingin%20konsultasi%20solusi%20data`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800 hover:underline inline-flex items-center gap-1"
            >
              <span>{COMPANY_INFO.phone}</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
            </a>
          </div>

          {/* Cakupan Wilayah Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs hover:border-[#C59B27] hover:shadow-lg transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-[#E6C564] flex items-center justify-center mb-4 shadow-sm">
                <Globe2 className="w-5 h-5 text-[#E6C564]" />
              </div>
              <h3 className="font-extrabold text-base text-[#0F172A] mb-1">
                Cakupan Wilayah
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Berbasis di Bandung, melayani kolaborasi jarak jauh untuk klien di seluruh dunia.
              </p>
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C59B27] shrink-0" />
              <span>{COMPANY_INFO.address}</span>
            </div>
          </div>

          {/* Jam Operasional Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs hover:border-[#C59B27] hover:shadow-lg transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-[#E6C564] flex items-center justify-center mb-4 shadow-sm">
                <Clock className="w-5 h-5 text-[#E6C564]" />
              </div>
              <h3 className="font-extrabold text-base text-[#0F172A] mb-1">
                Jam Kerja Fleksibel
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Siap berdiskusi melalui Google Meet, Zoom, atau WhatsApp sesuai zona waktu klien.
              </p>
            </div>
            <span className="text-xs sm:text-sm font-bold text-slate-800">
              {COMPANY_INFO.workHours}
            </span>
          </div>

        </div>

        {/* Consultation Form with Yunus Shifa Muntari Personal Branding */}
        <ConsultationForm />

      </div>
    </div>
  );
};
