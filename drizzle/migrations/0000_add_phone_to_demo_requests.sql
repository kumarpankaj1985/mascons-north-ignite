ALTER TABLE public.demo_requests ADD COLUMN IF NOT EXISTS phone TEXT;
COMMENT ON COLUMN public.demo_requests.phone IS 'Mobile number supplied on the Book a Demo form; optional.';