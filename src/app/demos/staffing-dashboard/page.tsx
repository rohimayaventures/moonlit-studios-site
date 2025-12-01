'use client';

import { useState, useMemo } from 'react';
import { AlertTriangle, Users, Clock, TrendingUp, Activity, CheckCircle, Radio } from 'lucide-react';

// Unit data with baseline staffing
const units = [
  { id: 'icu', name: 'ICU', beds: 24, baselineNurses: 12, maxRatio: 2, currentCensus: 20, avgAcuity: 4.2 },
  { id: 'er', name: 'Emergency', beds: 40, baselineNurses: 10, maxRatio: 4, currentCensus: 32, avgAcuity: 3.1 },
  { id: 'medsurg', name: 'Med-Surg', beds: 36, baselineNurses: 6, maxRatio: 6, currentCensus: 28, avgAcuity: 2.4 },
  { id: 'tele', name: 'Telemetry', beds: 28, baselineNurses: 7, maxRatio: 4, currentCensus: 24, avgAcuity: 3.0 },
  { id: 'peds', name: 'Pediatrics', beds: 20, baselineNurses: 5, maxRatio: 4, currentCensus: 14, avgAcuity: 2.8 },
];

// 48-hour forecast data (mocked predictions)
const forecastData = [
  { hour: 0, label: 'Now', censusChange: 0 },
  { hour: 4, label: '+4h', censusChange: 2 },
  { hour: 8, label: '+8h', censusChange: 4 },
  { hour: 12, label: '+12h', censusChange: 3 },
  { hour: 16, label: '+16h', censusChange: 5 },
  { hour: 20, label: '+20h', censusChange: 2 },
  { hour: 24, label: '+24h', censusChange: 1 },
  { hour: 28, label: '+28h', censusChange: 3 },
  { hour: 32, label: '+32h', censusChange: 6 },
  { hour: 36, label: '+36h', censusChange: 8 },
  { hour: 40, label: '+40h', censusChange: 5 },
  { hour: 44, label: '+44h', censusChange: 3 },
  { hour: 48, label: '+48h', censusChange: 2 },
];

export default function StaffingDashboardPage() {
  const [surgeLevel, setSurgeLevel] = useState(0); // 0-100 surge intensity
  const [selectedUnit, setSelectedUnit] = useState(units[0]);
  const [showAlertPanel, setShowAlertPanel] = useState(true);
  const [isDeploying, setIsDeploying] = useState(false);
  const [deployed, setDeployed] = useState(false);

  // Calculate staffing metrics based on surge level
  const metrics = useMemo(() => {
    const surgeMultiplier = 1 + (surgeLevel / 100) * 0.5; // Up to 50% increase

    return units.map(unit => {
      const projectedCensus = Math.min(unit.beds, Math.round(unit.currentCensus * surgeMultiplier));
      const projectedAcuity = Math.min(5, unit.avgAcuity + (surgeLevel / 100) * 1.2);
      const requiredNurses = Math.ceil(projectedCensus / unit.maxRatio);
      const staffingGap = requiredNurses - unit.baselineNurses;
      const currentRatio = projectedCensus / unit.baselineNurses;

      let status: 'safe' | 'warning' | 'critical';
      if (currentRatio <= unit.maxRatio) {
        status = 'safe';
      } else if (currentRatio <= unit.maxRatio * 1.25) {
        status = 'warning';
      } else {
        status = 'critical';
      }

      return {
        ...unit,
        projectedCensus,
        projectedAcuity,
        requiredNurses,
        staffingGap,
        currentRatio,
        status,
      };
    });
  }, [surgeLevel]);

  const totalGap = metrics.reduce((sum, u) => sum + Math.max(0, u.staffingGap), 0);
  const criticalUnits = metrics.filter(u => u.status === 'critical').length;
  const warningUnits = metrics.filter(u => u.status === 'warning').length;

  // Helper for Deployment Simulation
  const handleDeploy = () => {
    setIsDeploying(true);
    setTimeout(() => {
      setIsDeploying(false);
      setDeployed(true);
      setShowAlertPanel(false); // Dismiss alert after solving
    }, 2000);
  };

  const getStatusColor = (status: 'safe' | 'warning' | 'critical') => {
    switch (status) {
      case 'safe': return 'text-cyan-400';
      case 'warning': return 'text-amber-400';
      case 'critical': return 'text-rose-500';
    }
  };

  const getStatusBg = (status: 'safe' | 'warning' | 'critical') => {
    switch (status) {
      case 'safe': return 'bg-cyan-400/20 border-cyan-400/50';
      case 'warning': return 'bg-amber-400/20 border-amber-400/50';
      case 'critical': return 'bg-rose-500/20 border-rose-500/50';
    }
  };

  const getRatioColor = (ratio: number, maxRatio: number) => {
    if (ratio <= maxRatio) return 'text-cyan-400';
    if (ratio <= maxRatio * 1.25) return 'text-amber-400';
    return 'text-rose-500';
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800 px-4 py-4 md:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-900/20">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">StaffingForecast.io</h1>
              <p className="text-xs text-gray-400 flex items-center gap-2">
                Predictive Operations Command Center
                <span className="flex items-center gap-1 text-emerald-400 ml-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Live
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Forecast Horizon</p>
              <p className="text-lg font-bold text-cyan-400 font-mono">48 HOURS</p>
            </div>
            <div className={`px-4 py-2 rounded-lg border flex flex-col items-end ${
              criticalUnits > 0 ? 'bg-rose-500/10 border-rose-500/30' :
              warningUnits > 0 ? 'bg-amber-400/10 border-amber-400/30' :
              'bg-cyan-400/10 border-cyan-400/30'
            }`}>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">System Status</p>
              <div className="flex items-center gap-2">
                {criticalUnits > 0 && <AlertTriangle className="w-4 h-4 text-rose-500 animate-pulse" />}
                <p className={`text-sm font-bold ${
                  criticalUnits > 0 ? 'text-rose-500' :
                  warningUnits > 0 ? 'text-amber-400' :
                  'text-cyan-400'
                }`}>
                  {criticalUnits > 0 ? 'CRITICAL' : warningUnits > 0 ? 'ELEVATED' : 'STABLE'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4 md:p-6">
        {/* Top Stats Row - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-4 hover:border-gray-700 transition-colors">
            <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Total Beds</p>
            <div className="flex items-end justify-between mt-1">
              <p className="text-3xl font-bold text-white">{units.reduce((s, u) => s + u.beds, 0)}</p>
              <Users className="w-5 h-5 text-gray-600 mb-1" />
            </div>
            <p className="text-xs text-cyan-400 mt-2 font-medium">System Capacity</p>
          </div>

          <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-4 hover:border-gray-700 transition-colors">
            <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Projected Census</p>
            <div className="flex items-end justify-between mt-1">
              <p className="text-3xl font-bold text-white">{metrics.reduce((s, u) => s + u.projectedCensus, 0)}</p>
              <TrendingUp className={`w-5 h-5 mb-1 ${surgeLevel > 0 ? 'text-amber-400' : 'text-gray-600'}`} />
            </div>
            <p className="text-xs text-gray-400 mt-2">
              {Math.round((metrics.reduce((s, u) => s + u.projectedCensus, 0) / units.reduce((s, u) => s + u.beds, 0)) * 100)}% Occupancy
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-4 hover:border-gray-700 transition-colors">
            <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Staffing Gap</p>
            <div className="flex items-end justify-between mt-1">
              <p className={`text-3xl font-bold ${totalGap > 0 ? 'text-rose-500' : 'text-cyan-400'}`}>
                {totalGap > 0 ? `+${totalGap}` : '0'}
              </p>
              <Users className={`w-5 h-5 mb-1 ${totalGap > 0 ? 'text-rose-500' : 'text-cyan-400'}`} />
            </div>
            <p className="text-xs text-gray-400 mt-2">Nurses Needed (48h)</p>
          </div>

          <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-4 hover:border-gray-700 transition-colors">
            <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Units at Risk</p>
            <div className="flex items-baseline gap-3 mt-1">
              <div className="flex items-baseline gap-1">
                <p className={`text-3xl font-bold ${criticalUnits > 0 ? 'text-rose-500' : 'text-gray-600'}`}>{criticalUnits}</p>
                <span className="text-[10px] text-gray-500 uppercase">Crit</span>
              </div>
              <div className="flex items-baseline gap-1">
                <p className={`text-xl font-bold ${warningUnits > 0 ? 'text-amber-400' : 'text-gray-600'}`}>{warningUnits}</p>
                <span className="text-[10px] text-gray-500 uppercase">Warn</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-2">Based on Acuity/Ratio</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Surge Simulator */}
          <div className="lg:col-span-1 space-y-6">
            {/* Surge Simulator Card */}
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Radio className="w-4 h-4 text-cyan-400" />
                  Surge Simulator
                </h2>
                <span className={`px-2 py-1 rounded text-[10px] font-bold border ${
                  surgeLevel > 60 ? 'bg-rose-500/10 border-rose-500/30 text-rose-500' :
                  surgeLevel > 30 ? 'bg-amber-400/10 border-amber-400/30 text-amber-400' :
                  'bg-cyan-400/10 border-cyan-400/30 text-cyan-400'
                }`}>
                  {surgeLevel > 60 ? 'HIGH INTENSITY' : surgeLevel > 30 ? 'MODERATE' : 'BASELINE'}
                </span>
              </div>

              {/* Surge Slider */}
              <div className="mb-8 relative">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={surgeLevel}
                  onChange={(e) => setSurgeLevel(Number(e.target.value))}
                  className="w-full h-3 rounded-full appearance-none cursor-pointer relative z-10"
                  style={{
                    background: `linear-gradient(to right, #22d3ee 0%, #fbbf24 50%, #f43f5e 100%)`
                  }}
                />
                <div className="flex justify-between text-[10px] text-gray-500 mt-3 font-mono font-bold">
                  <span>BASELINE</span>
                  <span>PREDICTED SURGE (+{surgeLevel}%)</span>
                  <span>CRITICAL</span>
                </div>
              </div>

              {/* Impact Stats */}
              <div className="space-y-3 pt-4 border-t border-gray-800">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Admissions Forecast</span>
                  <span className="font-mono font-bold text-white">+{Math.round(8 + surgeLevel * 0.2)} / 24h</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Acuity Drift</span>
                  <span className={`font-mono font-bold ${surgeLevel > 50 ? 'text-amber-400' : 'text-cyan-400'}`}>
                    +{(surgeLevel / 100 * 1.2).toFixed(1)}
                  </span>
                </div>
              </div>
            </div>

            {/* Alert Panel - Actionable Insight */}
            {showAlertPanel && criticalUnits > 0 && !deployed && (
              <div className="bg-rose-950/30 rounded-xl border border-rose-500/50 p-5">
                <div className="flex items-start gap-3 mb-4">
                  <AlertTriangle className="w-5 h-5 text-rose-500 flex-shrink-0 animate-pulse" />
                  <div>
                    <h3 className="text-sm font-bold text-rose-500 uppercase tracking-wide">Critical Staffing Breach</h3>
                    <p className="text-xs text-rose-200/80 mt-1 leading-relaxed">
                      {criticalUnits} unit(s) exceeding safety ratios. Immediate intervention required to maintain license compliance.
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleDeploy}
                  disabled={isDeploying}
                  className="w-full py-2.5 bg-rose-600 hover:bg-rose-500 text-white rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-rose-900/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isDeploying ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Allocating Float Pool...</span>
                    </>
                  ) : (
                    <>
                      <span>Deploy Float Pool</span>
                      <TrendingUp className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            )}

            {/* Success State */}
            {deployed && (
              <div className="bg-emerald-950/30 rounded-xl border border-emerald-500/30 p-5">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <div>
                    <h3 className="text-sm font-bold text-emerald-400">Resources Allocated</h3>
                    <p className="text-xs text-emerald-200/60">Float nurses routed to ICU & ER.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Middle & Right Columns - Unit Cards & Chart */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {metrics.map((unit) => (
                <div
                  key={unit.id}
                  onClick={() => setSelectedUnit(unit)}
                  className={`bg-gray-900/80 rounded-xl border p-4 cursor-pointer transition-all hover:bg-gray-800 ${
                    selectedUnit.id === unit.id
                      ? 'border-cyan-500/50 shadow-lg shadow-cyan-900/10'
                      : 'border-gray-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-white text-sm flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${unit.status === 'safe' ? 'bg-cyan-400' : unit.status === 'warning' ? 'bg-amber-400' : 'bg-rose-500'}`}></div>
                      {unit.name}
                    </h3>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${getStatusBg(unit.status)} ${getStatusColor(unit.status)}`}>
                      {unit.status.toUpperCase()}
                    </span>
                  </div>

                  {/* Ratio Bar */}
                  <div className="space-y-1 mb-4">
                    <div className="flex justify-between text-[10px] font-medium text-gray-400">
                      <span>Nurse:Patient Ratio</span>
                      <span className={getRatioColor(unit.currentRatio, unit.maxRatio)}>1:{unit.currentRatio.toFixed(1)}</span>
                    </div>
                    <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 ${
                          unit.status === 'critical' ? 'bg-rose-500' :
                          unit.status === 'warning' ? 'bg-amber-400' : 'bg-cyan-400'
                        }`}
                        style={{ width: `${Math.min(100, (unit.currentRatio / (unit.maxRatio * 1.5)) * 100)}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-xs border-t border-gray-800 pt-3">
                    <div>
                      <span className="text-gray-500 block mb-0.5">Census</span>
                      <span className="font-mono font-bold text-white">{unit.projectedCensus}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-gray-500 block mb-0.5">Gap</span>
                      <span className={`font-mono font-bold ${unit.staffingGap > 0 ? 'text-rose-500' : 'text-cyan-400'}`}>
                        {unit.staffingGap > 0 ? `+${unit.staffingGap}` : 'OK'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline Chart */}
            <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
              <h3 className="text-sm font-bold text-gray-300 mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400" />
                48-Hour Census Projection
              </h3>
              <div className="h-32 flex items-end justify-between gap-1">
                {forecastData.map((point, idx) => {
                  const adjustedChange = Math.round(point.censusChange * (1 + surgeLevel / 100));
                  const height = Math.min(100, (adjustedChange / 12) * 100);
                  const isHighRisk = adjustedChange > 6;

                  return (
                    <div key={idx} className="flex-1 flex flex-col justify-end group relative">
                      <div
                        className={`w-full rounded-t transition-all duration-500 ${
                          isHighRisk ? 'bg-gradient-to-t from-rose-900 to-rose-500' : 'bg-gradient-to-t from-cyan-900 to-cyan-500'
                        }`}
                        style={{ height: `${height}%` }}
                      />
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-xs text-white px-2 py-1 rounded border border-gray-700 whitespace-nowrap z-10">
                        {point.label}: +{adjustedChange}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-between mt-2 text-[10px] text-gray-500 font-mono uppercase">
                <span>Now</span>
                <span>+24h</span>
                <span>+48h</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
