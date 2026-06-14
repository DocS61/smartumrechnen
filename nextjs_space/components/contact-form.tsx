'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

export function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="p-8 rounded-xl border border-border bg-card text-center">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h2 className="font-semibold text-xl mb-2">Nachricht gesendet!</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Vielen Dank für deine Nachricht. Wir melden uns innerhalb von 48 Stunden bei dir.
        </p>
        <Button onClick={() => setStatus('idle')} variant="outline">Weitere Nachricht senden</Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 rounded-xl border border-border bg-card space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1.5">Name *</label>
        <Input
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          placeholder="Dein Name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1.5">E-Mail *</label>
        <Input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          placeholder="deine@email.de"
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1.5">Betreff *</label>
        <Input
          id="subject"
          required
          value={formData.subject}
          onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
          placeholder="Worum geht es?"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1.5">Nachricht *</label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          placeholder="Deine Nachricht..."
          className="flex w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-y"
        />
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400">
          <AlertCircle className="w-4 h-4" />
          Beim Senden ist ein Fehler aufgetreten. Bitte versuche es erneut.
        </div>
      )}

      <Button type="submit" disabled={status === 'sending'} className="w-full">
        {status === 'sending' ? (
          'Wird gesendet...'
        ) : (
          <><Send className="w-4 h-4 mr-2" /> Nachricht senden</>
        )}
      </Button>
    </form>
  )
}
