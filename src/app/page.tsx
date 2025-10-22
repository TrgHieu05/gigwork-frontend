'use client';

import { Label } from '@/components/ui/label';
import { User } from "lucide-react";


export default function Home() {
  return (
    <>
      <Label showIcon={true} icon={<User />}>Hello</Label>
      <div> Welcome to gigwork </div>
    </>
  );
}
