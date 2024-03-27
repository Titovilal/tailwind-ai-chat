import Button from "@/components/Button";
import IconButton from "@/components/IconButton";
import Input from "@/components/Input";

export default function ChatBar() {
  return (
    <div className="flex h-12 w-full rounded-xl">
      <div className="w-full px-2">
       <Input className="input-primary"/>
      </div>

      <IconButton className="button-background focus:ouline-none" icon="send"></IconButton>
     
    </div>
  );
}
