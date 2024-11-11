import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { ForgotPasswordForm } from "@/components/ui/Forms/ForgotPsswordForm";
import { SignInForm } from "@/components/ui/Forms/SignInForm";
  import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs";
  
  export default function LoginPage() {
    return (
      <div className="flex align-center items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <Tabs defaultValue="account" className="w-full md:w-2/3 xl:w-2/4 mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Sign-In</TabsTrigger>
            <TabsTrigger value="password">Forgot Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card className="py-8">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Welcome! Please Login</CardTitle>
                <CardDescription className=" text-center">
                  {`Make changes to your account here. Click save when you're done.`}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <SignInForm />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-2xl">Recover Password</CardTitle>
                <CardDescription className=" text-center">
                  {`Change your password here. After saving, you'll be logged out.`}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <ForgotPasswordForm />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    );
  }
  