import { z } from 'zod';

// ---------------------------------------------------------------------------
// Zod v4 Schema
// Note: Zod v4 changed API:
//  - errorMap → error
//  - invalid_type_error → error
//  - .optional().default() → just .optional() or use z.preprocess
// ---------------------------------------------------------------------------
export const rsvpSchema = z.object({
  name: z
    .string()
    .min(2, 'Tên phải có ít nhất 2 ký tự.')
    .max(100, 'Tên không được quá 100 ký tự.')
    .trim(),

  attendance: z.enum(['attending', 'not_attending', 'maybe']),

  guestCount: z
    .number()
    .int('Số khách phải là số nguyên.')
    .min(0, 'Số khách không được âm.')
    .max(10, 'Tối đa 10 khách mỗi RSVP.'),

  wishes: z
    .string()
    .max(500, 'Lời chúc không được quá 500 ký tự.')
    .optional(),
});

export type RSVPInput = z.input<typeof rsvpSchema>;
export type RSVPPayload = z.infer<typeof rsvpSchema>;

export type AttendanceStatus = NonNullable<RSVPPayload['attendance']>;

// ---------------------------------------------------------------------------
// Mock submit function – ready to be wired to Firebase Firestore
// ---------------------------------------------------------------------------
// To wire to Firestore, replace the body with:
//
//   import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
//   import { db } from '@/lib/firebase';
//
//   const docRef = await addDoc(collection(db, 'rsvp_responses'), {
//     ...payload,
//     createdAt: serverTimestamp(),
//   });
//   return docRef.id;
//
// ---------------------------------------------------------------------------
export async function submitRSVP(payload: RSVPPayload): Promise<{ success: boolean; id: string }> {
  // Validate once more on the "server" side
  const validated = rsvpSchema.parse(payload);

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1200));

  // TODO: Replace with actual Firestore write
  console.log('[RSVP] Payload to be saved:', validated);

  // Mock response
  return {
    success: true,
    id: `mock-${Date.now()}`,
  };
}
