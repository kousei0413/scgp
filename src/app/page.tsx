import React from 'react';

const FEATURES = [
  {
    title: "便利ツール & Discord一覧",
    description: "VRChat、Unity、Minecraftなどの開発に役立つツールやコミュニティを瞬時に検索・閲覧できるディレクトリ。",
    path: "/directory",
    status: "Available",
    color: "border-blue-500/30 hover:border-blue-500"
  },
  {
    title: "Webエミュレータ部屋",
    description: "EmulatorJSを内蔵し、ブラウザ上で直接レトロゲームの動作テストやプレイができる専用モジュール。",
    path: "/emulator",
    status: "Developing",
    color: "border-purple-500/30 hover:border-purple-500"
  },
  {
    title: "スクリプト / 技術ドキュメント",
    description: "C#やNode.jsによるネットワーク解析、自動化スクリプトなどの技術備忘録・開発ログ。",
    path: "/docs",
    status: "Planning",
    color: "border-emerald-500/30 hover:border-emerald-500"
  }
];

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center px-4 relative overflow-hidden">
      
      {/* 背景のうっすらとした光の演出（Tailwind） */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl w-full text-center relative z-10 py-12">
        {/* ヒーローセクション */}
        <span className="text-xs font-bold tracking-widest text-blue-400 uppercase px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
          Next-Gen Portal Project
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white mt-4 mb-6 tracking-tight">
          すべてのツールと、<br className="sm:hidden" />
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            コアな技術をここに集約。
          </span>
        </h1>
        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          EmulatorJSの思想を受け継いだ、ブラウザ完結型の総合開発ハブ。データ管理、エミュレーション、コミュニティの導線を1つに。
        </p>

        {/* 主要機能へのナビゲーション（グリッド） */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {FEATURES.map((feat) => (
            <a
              key={feat.title}
              href={feat.path}
              className={`block p-6 bg-gray-900/40 backdrop-blur rounded-2xl border transition-all duration-300 group ${feat.color}`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs px-2 py-0.5 rounded font-medium ${
                  feat.status === 'Available' ? 'bg-blue-500/20 text-blue-300' :
                  feat.status === 'Developing' ? 'bg-purple-500/20 text-purple-300' :
                  'bg-gray-800 text-gray-400'
                }`}>
                  {feat.status}
                </span>
                <span className="text-gray-500 group-hover:text-white transition-colors">→</span>
              </div>
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {feat.title}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feat.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
