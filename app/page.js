'use client';

import { motion } from 'framer-motion';
import { Bell, Flame, Plus } from 'lucide-react';

const reminders = [
  {
    title: 'Physics Assignment',
    time: '7:00 PM',
    xp: '+10 XP',
  },
  {
    title: 'Read Chemistry',
    time: 'Tomorrow',
    xp: '+15 XP',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-6 pb-32">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass rounded-3xl p-5 mb-6"
      >
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">
              Good Evening James 👋
            </h1>

            <p className="text-white/70 mt-1">
              Level 3 • 120 XP
            </p>
          </div>

          <div className="glass p-3 rounded-2xl">
            <Bell size={22} />
          </div>
        </div>
      </motion.div>


      {/* STREAK CARD */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass rounded-3xl p-5 mb-6 glow"
      >
        <div className="flex items-center gap-3">
          <div className="bg-orange-500/20 p-3 rounded-2xl">
            <Flame className="text-orange-400" />
          </div>

          <div>
            <h2 className="text-lg font-semibold">
              4 Day Streak 🔥
            </h2>

            <p className="text-white/70 text-sm">
              Complete today’s missions to continue.
            </p>
          </div>
        </div>
      </motion.div>


      {/* SECTION TITLE */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">
          Incoming Productivity Mail 📬
        </h2>
      </div>


      {/* REMINDER CARDS */}
      <div className="space-y-4">

        {reminders.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            whileTap={{ scale: 0.97 }}
            className="glass rounded-3xl p-5"
          >
            <div className="flex justify-between items-start">

              <div>
                <h3 className="text-lg font-semibold mb-1">
                  {item.title}
                </h3>

                <p className="text-white/60 text-sm">
                  Due: {item.time}
                </p>
              </div>

              <div className="bg-cyan-400/20 text-cyan-300 px-3 py-1 rounded-full text-sm">
                {item.xp}
              </div>
            </div>
          </motion.div>
        ))}
      </div>


      {/* FLOATING BUTTON */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-24 right-6 w-16 h-16 rounded-full glass glow flex items-center justify-center"
      >
        <Plus size={30} />
      </motion.button>


      {/* BOTTOM NAVIGATION */}
      <div className="fixed bottom-0 left-0 w-full px-4 pb-6">
        <div className="glass rounded-3xl p-4 flex justify-around items-center">

          <button className="text-cyan-300 font-semibold">
            Home
          </button>

          <button className="text-white/60">
            Missions
          </button>

          <button className="text-white/60">
            Rewards
          </button>

          <button className="text-white/60">
            Profile
          </button>

        </div>
      </div>

    </main>
  );
          }
